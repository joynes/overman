/*
 * Copyright 2014, 2016 Per Eckerdal
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/*jshint esversion: 6 */
'use strict';

var childProcess = require('child_process');

it('should spawn child processes and never finish', function() {
  var child = childProcess.fork(__dirname + '/../util/never_ending_program_that_may_fork_subprocess.js', ['fork']);
  child.on('message', function(data) {
    process.send(data);
  });
  return new Promise(function() {});
});
