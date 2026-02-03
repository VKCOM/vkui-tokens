import * as assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { convertCamelToSnake } from './convertCamelToSnake.ts';

describe('convertCamelToSnake', () => {
  it('should correctly work with empty string', () => {
    assert.equal(convertCamelToSnake(''), '');
  });

  it('should work with word lower letters', () => {
    assert.equal(convertCamelToSnake('hello'), 'hello');
  });

  it('should work with Capitalize world', () => {
    assert.equal(convertCamelToSnake('Hello'), 'hello');
  });

  it('should convert two words string', () => {
    assert.equal(convertCamelToSnake('desktopS'), 'desktop_s');
  });

  it('should convert two words string with number prefix', () => {
    assert.equal(convertCamelToSnake('desktop3S'), 'desktop_3s');
  });

  it('should convert many words string', () => {
    assert.equal(
      convertCamelToSnake('hello1SWorldMy2XsFriend3Xs'),
      'hello_1s_world_my_2xs_friend_3xs',
    );
    assert.equal(convertCamelToSnake('sizeGridColumn1X2'), 'size_grid_column1_x2');
    assert.equal(convertCamelToSnake('size2XsRegular2L'), 'size_2xs_regular_2l');
    assert.equal(convertCamelToSnake('fontCaption2Caps'), 'font_caption2_caps');
    assert.equal(convertCamelToSnake('searchCaption2MailSans'), 'search_caption2_mail_sans');
  });

  it('should convert special case 1', () => {
    assert.equal(convertCamelToSnake('octaviusShadowLetterList'), 'octavius_shadow_letter_list');
  });
});
