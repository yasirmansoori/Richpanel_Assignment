// Dependencies
const passport = require('passport');
const axios = require('axios');
const User = require('../models/user.model');
const Page = require('../models/page.model');
const { randomUUID } = require('crypto');
const FacebookStrategy = require('passport-facebook').Strategy;
const bcrypt = require('bcrypt');
const FACEBOOK_APP_ID = process.env.FACEBOOK_APP_ID;
const FACEBOOK_APP_SECRET = process.env.FACEBOOK_APP_SECRET;

// passport configuration
passport.use('facebook-login', new FacebookStrategy({
    clientID: FACEBOOK_APP_ID,
    clientSecret: FACEBOOK_APP_SECRET,
    callbackURL: "http://localhost:3001/auth/facebook/callback",
    profileFields: ['id', 'displayName', 'photos', 'email']
},
    async (accessToken, refreshToken, profile, done) => {
        try {
            // to get the pages of the user, if exists create a new page
            const pagesResponse = await axios.get(`https://graph.facebook.com/${profile.id}/accounts`, {
                params: { access_token: accessToken }
            });

            // to check if the user already exists
            const email = profile.emails && profile.emails[0] ? profile.emails[0].value : null;
            const existingUser = await User.findOne({ facebookId: profile.id });

            if (existingUser) {
                console.log('User already exists:', existingUser);
            } else {
                const newUser = new User({
                    name: profile.displayName,
                    email: email,
                    facebookId: profile.id,
                    password: await bcrypt.hash(randomUUID(), 10),
                });
                await newUser.save();

                // to check if the page already exists for the user
                const page = await Page.findOne({ userId: newUser._id });

                if (!page) {
                    const pages = pagesResponse.data.data;

                    if (pages.length === 0) {
                        return done(null, profile);
                    }

                    const newPage = new Page({
                        userId: newUser._id,
                        pageId: pages[0].id,
                        facebookId: profile.id,
                        pageName: pages[0].name,
                        accessToken: pages[0].access_token,
                    });
                    await newPage.save();
                }
            }

            return done(null, profile);
        } catch (error) {
            console.error('Error in Facebook authentication:', error);
            return done(error, null);
        }
    }));

// serialize and deserialize the user
passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((obj, done) => done(null, obj));
