/**
 * Typings
 */
import { IFormStep } from '@/@types/form';

/**
 * Helpers
 */
import getRandomName from '@/utils/getRandomName';

/**
 * Registration form URL
 */
export const TEST_URL: string = 'https://alfaleads.net/registration.html';

/**
 * Browser window dimensions
 */
export const DIMENSIONS: { width: number; height: number } = {
  width: 1920,
  height: 1080,
};

/**
 * Registration form fields
 */
export const FORM_FIELDS: IFormStep[][] = [
  [
    {
      selector: '#first-name',
      value: getRandomName(),
    },
    {
      selector: '#last-name',
      value: 'test',
    },
    {
      selector: '#mail',
      value: `${getRandomName()}@test.com`,
    },
    {
      selector: '#pass1',
      value: 'test1337',
    },
    {
      selector: '#pass2',
      value: 'test1337',
    },
    {
      selector: '#about',
      value: 'test',
    },
  ],
];
