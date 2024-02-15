/**
 * MultiAuth-SampleLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, numberEnum } from '../schema';

/**
 * Enum for SuiteCodeEnum
 */
export enum SuiteCodeEnum {
  Hearts = 1,
  Spades = 2,
  Clubs = 3,
  Diamonds = 4,
}

/**
 * Schema for SuiteCodeEnum
 */
export const suiteCodeEnumSchema: Schema<SuiteCodeEnum> = numberEnum(SuiteCodeEnum);
