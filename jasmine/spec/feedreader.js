"use strict";
/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against my application.
 */

describe('RSS Feeds', function() {
    
    it('are defined', function() {
        expect(allFeeds).toBeDefined();
        expect(allFeeds.length).not.toBe(0);
    });

    it('URLs are defined', function() {
        allFeeds.forEach(function(allFeeds) {
            expect(allFeeds.url).not.toEqual('');
        });
    });

    it('names are not empty', function() {
        allFeeds.forEach(function(allFeeds) {
            expect(allFeeds.name).not.toEqual('');
        });
    });
});

describe('The menu', function() {

    it('is hidden by default', function() {
        expect(document.body.classList).toContain('menu-hidden');
    });

    it('is shown', function() {
        $('.menu-icon-link').trigger('click');
        expect($('body').hasClass('menu-hidden')).toBeFalsy();
    });

    it('is hidden', function() {
        $('.menu-icon-link').trigger('click');
        expect($('body').hasClass('menu-hidden')).toBeTruthy();
    });
});

describe('Initial Entries', function() {

    beforeEach(function(done) {
        loadFeed(0, done);
    });

    it('are defined', function() {
        var entry = $('.feed .entry');
        expect(entry.length).toBeGreaterThan(0);
    });
});

describe('New Feed Selection', function() {

    var initialFeed;
    beforeEach(function(done) {
        initialFeed = $('.feed').html();
        loadFeed(0, done);
    });

    it('is updated', function(done) {
        loadFeed(1, function() {
            expect($('.feed').html()).not.toBe(initialFeed);
            done();
        });
    });

});