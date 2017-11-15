/**
 * Filename: g:\project\airplake\mdc-v4\src\lib\db.ts
 * Path: g:\project\airplake\mdc-v4
 * Created Date: Tuesday, August 29th 2017, 12:10:50 pm
 * Author: Wy
 * 
 * Copyright (c) 2017 Your Company
 */

import * as config from 'config'

const knex = require('knex')(config.get('db'))

const bookshelf = require('bookshelf')(knex)

export default bookshelf