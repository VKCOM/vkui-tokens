import { describe, expect, it } from '@jest/globals';

import { PixelifyTheme, Theme } from '@/interfaces/general';
import { ParadigmTheme } from '@/interfaces/namespaces/paradigm';

import { pixelifyValues } from './pixelifyValues';

describe('pixelifyValues', () => {
	describe('general', () => {
		it('should change type', () => {
			const theme: Partial<Theme> = {
				themeType: 'root',
			};

			const pixelifyTheme: Partial<PixelifyTheme> = {
				themeType: 'pixelify',
			};

			expect(pixelifyValues(theme) as Partial<PixelifyTheme>).toStrictEqual(pixelifyTheme);
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

			expect(pixelifyValues(theme) as Partial<PixelifyTheme>).toStrictEqual(pixelifyTheme);
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

			expect(pixelifyValues(theme) as Partial<PixelifyTheme>).toStrictEqual(pixelifyTheme);
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

			expect(pixelifyValues(theme) as Partial<PixelifyTheme>).toStrictEqual(pixelifyTheme);
		});

		it('should correctly pixelify custom fontWeight tokens', () => {
			expect(pixelifyValues({ fontWeightAccent1: 700 })).toEqual({
				fontWeightAccent1: 700,
			});
		});
	});
});
