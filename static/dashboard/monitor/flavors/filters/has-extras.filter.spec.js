/**
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License. You may obtain
 * a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations
 * under the License.
 */
(function() {
  'use strict';

  describe('horizon.dashboard.monitor.flavors.hasExtras', function() {

    var hasExtras;

    beforeEach(module('horizon.framework.util.i18n'));
    beforeEach(module('horizon.dashboard.monitor.flavors'));

    beforeEach(inject(function(_hasExtrasFilter_) {
      hasExtras = _hasExtrasFilter_;
    }));

    it('returns Yes when key is present', function() {
      var input = { 1: 'test' };
      expect(hasExtras(input)).toBeTruthy();
    });

    it('returns No when object is undefined or has no properties', function() {
      expect(hasExtras()).not.toBeTruthy();
      expect(hasExtras({})).not.toBeTruthy();
      expect(hasExtras('string')).not.toBeTruthy();
      expect(hasExtras(1)).not.toBeTruthy();
      expect(hasExtras([1])).not.toBeTruthy();
    });
  });

})();
