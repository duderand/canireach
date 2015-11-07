/*
 * GET home page.
 */
import express = require('express');
import urlrecords = require('../app/urlrecords');

export function index(req: express.Request, res: express.Response) {
    res.render('index', { title: 'index', datamain: 'index' });
};

export function test(req: express.Request, res: express.Response) {
    res.render('test', { title: 'test', datamain: 'test' });
};

export function list(req: express.Request, res: express.Response) {
    var isJson = req.accepted.some(function (type) { return type.value === 'application/json'; })
    if (isJson) {
        res.json(urlrecords.getblocked(req));
    } else {
        res.render('list', { title: 'list', datamain: 'list', blocked: urlrecords.getblocked(req) });
    }
};