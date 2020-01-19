/**
 * Typings
 */
import { IFormInput } from '@/@types/form';

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
  height: 1280,
};

/**
 * Input types constants
 */
export enum INPUT_TYPE {
  SELECT = 'select',
  SELECTIZED = 'selectized',
  CHECKBOX = 'checkbox',
}

/**
 * Registration form fields
 */
const name: string = getRandomName();
export const FORM_FIELDS: IFormInput[][] = [
  [
    {
      selector: '#first-name',
      value: name,
    },
    {
      selector: '#last-name',
      value: 'test',
    },
    {
      selector: '#mail',
      value: `${name}@test.com`,
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
  [
    {
      selector: '#country',
      value: 'test',
    },
    {
      selector: '#city',
      value: 'test',
    },
    {
      selector: '[data-select2-id="1"]',
      value: '.select2-results__option:first-child',
      type: INPUT_TYPE.SELECT,
    },
    {
      selector: '#username',
      value: 'test',
    },
    {
      selector: '#experience',
      value: 'test',
    },
  ],
  [
    {
      selector: '[data-select2-id="5"]',
      value: '.select2-results__option:first-child',
      type: 'select',
    },
    {
      selector: '#networks-selectized',
      value: 'test',
      type: INPUT_TYPE.SELECTIZED,
      wrapper: '.networks--wrapper',
    },
    {
      selector: '#traffic-selectized',
      value: 'test',
      type: INPUT_TYPE.SELECTIZED,
      wrapper: '.traffic--wrapper',
    },
    {
      selector: '[data-select2-id="7"]',
      value:
        '#select2-select-verticies-results .select2-results__option:first-child',
      type: INPUT_TYPE.SELECT,
    },
    {
      selector: '[data-select2-id="8"]',
      value:
        '#select2-select-country-results .select2-results__option:first-child',
      type: INPUT_TYPE.SELECT,
    },
    {
      selector: '[data-select2-id="9"]',
      value:
        '#select2-monthly-revenue-results .select2-results__option:first-child',
      type: INPUT_TYPE.SELECT,
    },
    {
      selector: '#agree',
      type: INPUT_TYPE.CHECKBOX,
    },
  ],
];
