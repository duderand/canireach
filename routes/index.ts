/*
 * GET home page.
 */
import express = require('express');

export function index(req: express.Request, res: express.Response) {
    res.render('index', { title: 'Can I reach?', datamain: 'index' });
};

export function test(req: express.Request, res: express.Response) {
    res.render('test', { title: 'test', datamain: 'test' });
};

