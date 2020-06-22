import { test_execute_root         } from './root/root.test.js';
import { test_execute_type         } from './type/type.test.js';
import { test_execute_syntax       } from './syntax/syntax.test.js';
import { test_execute_test         } from './test/test.test.js';
import { test_execute_compare      } from './compare/compare.test.js';
import { test_execute_convert      } from './convert/convert.test.js';
import { test_execute_number       } from './number/number.test.js';
import { test_execute_string       } from './string/string.test.js';
import { test_execute_object       } from './object/object.test.js';
import { test_execute_array        } from './array/array.test.js';
import { test_execute_consoleHook  } from './consoleHook/consoleHook.test.js';
import { test_execute_other        } from './other/other.test.js';

export const test_execute_index = (parts) => {

  console.log(`parts.js version: ${parts.VERSION}`);

  console.log(`platform: ${parts.platform.name()}`);
  if (parts.platform.isWebBrowser()) {
    console.log(`  web browser: ${parts.platform.browserName()}`);
    console.log(`  User Agent: ${window.navigator.userAgent}`);
  }
  if (parts.platform.buildMode !== '') {
    console.log(`  buildMode: ${parts.platform.buildMode}`);
  }
  console.log('test start');

  const test_execute_nameSpace = (parts) => {
    const { describe, it, checkEqual } = parts.test;
    describe('test_execute_nameSpace', () => {

      const { propertyCount, inProperty } = parts.object;

      it('test_execute_nameSpace 1', () => {

        const countArray =
          [317, 15, 3, 208, 9, 11, 23, 29, 7, 29, 14, 36];
        checkEqual(countArray.shift(),  propertyCount(parts));
        checkEqual(countArray.shift(),  propertyCount(parts.platform));
        checkEqual(countArray.shift(),  propertyCount(parts.root));
        checkEqual(countArray.shift(),  propertyCount(parts.type));
        checkEqual(countArray.shift(),  propertyCount(parts.syntax));
        checkEqual(countArray.shift(),  propertyCount(parts.test));
        checkEqual(countArray.shift(),  propertyCount(parts.compare));
        checkEqual(countArray.shift(),  propertyCount(parts.convert));
        checkEqual(countArray.shift(),  propertyCount(parts.number));
        checkEqual(countArray.shift(),  propertyCount(parts.string));
        checkEqual(countArray.shift(),  propertyCount(parts.object));
        checkEqual(countArray.shift(),  propertyCount(parts.array));
        checkEqual(true,
          inProperty(
            parts,
            'type,syntax,test,compare,convert,' +
            'string,object,consoleHook',
          ),
        );

      });

      it('test_execute_nameSpace 2', () => {
        checkEqual(true,
          inProperty(
            parts,
            'isUndefinedAll,isNotNullAll,' +
            'isFunc,isNotObj,' +
            'isThrown,isThrownValue,isThrownException,isNotThrown,' +
            'assert,guard,' +
            'sc,if_,switch_,' +
            'equal,or,' +
            'matchSome,matchSomeValue,initialValue,' +
            'numberToString,' +
            'stringToNumber,stringToInteger,' +
            'numToString,' +
            'strToNumber,strToInteger,' +
            'numToStr,' +
            'strToNum,strToInt,' +
            'matchFormat,' +
            'copyProperty,propertyCount,inProperty,' +
            'copyProp,propCount,inProp,' +
            'root',
          ),
        );

        checkEqual(false,
          inProperty(
            parts,
            'abc,' +
      '',
          ),
        );
      });
    });
  };

  const test_execute_SelfReference = (parts) => {
    const { describe, it, checkEqual } = parts.test;
    describe('test_execute_SelfReference', () => {
      it('test_parts_SelfReference', () => {
        checkEqual(parts.VERSION, parts.parts.VERSION);
        checkEqual(false, parts.isUndefined(parts.parts));
        checkEqual(true, parts.isUndefined(parts.parts.parts));

        const parts1 = parts.cloneDeep(parts);
        delete parts1.parts;
        const parts2 = parts.cloneDeep(parts.parts);
        checkEqual(true,  parts.equalDeep(parts1, parts2));

      });
    });
  };

  const { describe } = parts.test;
  describe('test_execute_index', () => {

    test_execute_root(parts);
    test_execute_type(parts);
    test_execute_syntax(parts);
    test_execute_test(parts);
    test_execute_compare(parts);
    test_execute_convert(parts);
    test_execute_number(parts);
    test_execute_string(parts);
    test_execute_object(parts);
    test_execute_array(parts);
    test_execute_consoleHook(parts);
    test_execute_other(parts);
    test_execute_nameSpace(parts);
    test_execute_SelfReference(parts);

  });
};

export default {
  test_execute_index,
}