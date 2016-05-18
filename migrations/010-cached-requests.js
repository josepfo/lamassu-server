'use strict'

var db = require('./db')

exports.up = function (next) {
  db.query('CREATE TABLE IF NOT EXISTS cached_requests ( ' +
    'id serial PRIMARY KEY, ' +
    'device_fingerprint text NOT NULL, ' +
    'session_id uuid NOT NULL, ' +
    'path text NOT NULL, ' +
    'method text NOT NULL, ' +
    'body json NOT NULL, ' +
    'UNIQUE (device_fingerprint, session_id, path, method) ' +
    ')', next)
}

exports.down = function (next) {
  next()
}
