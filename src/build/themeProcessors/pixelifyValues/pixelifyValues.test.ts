import * as assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import type { PixelifyTheme, Theme } from '../../../interfaces/general/index.ts';
import type { ParadigmTheme } from '../../../interfaces/namespaces/paradigm/index.ts';
import { pixelifyValues } from './pixelifyValues.ts';

describe('pixelifyValues', () => {
  describe('general', () => {
    it('should change type', () => {
      const theme: Partial<Theme> = {
        themeType: 'root',
      };

      const pixelifyTheme: Partial<PixelifyTheme> = {
        themeType: 'pixelify',
      };

      assert.deepEqual(pixelifyValues(theme) as Partial<PixelifyTheme>, pixelifyTheme);
    });

    it('should pixelify flat numbers', () => {
      const theme: Partial<ParadigmTheme> = {
        x1: 4,
        x2: 8,
      };

      const pixelifyTheme: Partial<PixelifyTheme<ParadigmTheme>> = {
        x1: '4px',
        x2: '8px',
      };

      assert.deepEqual(pixelifyValues(theme) as Partial<PixelifyTheme>, pixelifyTheme);
    });

    it('should pixelify viewport values', () => {
      const theme: Partial<Theme> = {
        sizePopupBasePadding: {
          compact: 16,
          regular: 20,
        },
      };

      const pixelifyTheme: Partial<PixelifyTheme<ParadigmTheme>> = {
        sizePopupBasePadding: {
          compact: '16px',
          regular: '20px',
        },
      };

      assert.deepEqual(pixelifyValues(theme) as Partial<PixelifyTheme>, pixelifyTheme);
    });

    it('should pixelify float numbers', () => {
      const theme: Partial<ParadigmTheme> = {
        x1: 1,
        x2: 0.5,
        x3: 0.33,
      };

      const pixelifyTheme: Partial<PixelifyTheme<ParadigmTheme>> = {
        x1: '1px',
        x2: '0.5px',
        x3: '0.33px',
      };

      assert.deepEqual(pixelifyValues(theme) as Partial<PixelifyTheme>, pixelifyTheme);
    });

    it('should correctly pixelify fonts (exclude weight)', () => {
      const theme: Partial<ParadigmTheme> = {
        fontH1: {
          compact: {
            fontSize: 24,
            lineHeight: '32px',
            fontWeight: 700,
            fontFamily: 'MailSans, Helvetica, Arial, sans-serif',
            marginBottom: 16,
          },
          regular: {
            fontSize: 24,
            lineHeight: '32px',
            fontWeight: 700,
            fontFamily: 'MailSans, Helvetica, Arial, sans-serif',
            marginBottom: 16,
          },
        },
      };

      const pixelifyTheme: Partial<PixelifyTheme<ParadigmTheme>> = {
        fontH1: {
          compact: {
            fontSize: '24px',
            lineHeight: '32px',
            fontWeight: 700,
            fontFamily: 'MailSans, Helvetica, Arial, sans-serif',
            marginBottom: '16px',
          },
          regular: {
            fontSize: '24px',
            lineHeight: '32px',
            fontWeight: 700,
            fontFamily: 'MailSans, Helvetica, Arial, sans-serif',
            marginBottom: '16px',
          },
        },
      };

      assert.deepEqual(pixelifyValues(theme) as Partial<PixelifyTheme>, pixelifyTheme);
    });

    it('should correctly pixelify custom fontWeight tokens', () => {
      assert.deepEqual(pixelifyValues({ fontWeightAccent1: 700 }), {
        fontWeightAccent1: 700,
      });
    });

    it('should correctly pixelify zIndex', () => {
      assert.deepEqual(pixelifyValues({ zIndexModal: 100 }), { zIndexModal: 100 });
    });

    it('should correctly pixelify opacity', () => {
      assert.deepEqual(pixelifyValues({ opacityDisable: 1, opacityDisableAccessibility: 0.5 }), {
        opacityDisable: 1,
        opacityDisableAccessibility: 0.5,
      });
    });

    it('should correctly pixelify tone', () => {
      assert.deepEqual(pixelifyValues({ toneValueActive: 0.1 }), { toneValueActive: 0.1 });
    });
  });
});
