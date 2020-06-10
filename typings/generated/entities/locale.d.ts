import { AxiosInstance } from 'axios';
import { Except, SetOptional } from 'type-fest';
import { MetaSysProps, DefaultElements, CollectionProp } from '../common-types';
export declare type LocaleProps = {
    sys: MetaSysProps;
    /**
     * Locale name
     */
    name: string;
    /**
     * Locale code (example: en-us)
     */
    code: string;
    /**
     * Locale code to fallback to when there is not content for the current locale
     */
    fallbackCode: string;
    /**
     *  If the content under this locale should be available on the CDA (for public reading)
     */
    contentDeliveryApi: boolean;
    /**
     * If the content under this locale should be available on the CMA (for editing)
     */
    contentManagementApi: boolean;
    /**
     * If this is the default locale
     */
    default: boolean;
    /**
     * If the locale needs to be filled in on entries or not
     */
    optional: boolean;
};
export declare type CreateLocaleProps = SetOptional<Except<LocaleProps, 'sys'>, 'optional' | 'contentManagementApi' | 'default' | 'contentDeliveryApi'>;
export interface Locale extends LocaleProps, DefaultElements<LocaleProps> {
    /**
     * Deletes this object on the server.
     * @return Promise for the deletion. It contains no data, but the Promise error case should be handled.
     * @example ```javascript
     * const contentful = require('contentful-management')
     *
     * const client = contentful.createClient({
     *   accessToken: '<content_management_api_key>'
     * })
     *
     * client.getSpace('<space_id>')
     * .then((space) => space.getLocale('<locale_id>'))
     * .then((locale) => locale.delete())
     * .then(() => console.log(`locale deleted.`))
     * .catch(console.error)
     * ```
     */
    delete(): Promise<void>;
    /**
     * Sends an update to the server with any changes made to the object's properties
     * @return Object returned from the server with updated changes.
     * @example ```javascript
     * const contentful = require('contentful-management')
     *
     * const client = contentful.createClient({
     *   accessToken: '<content_management_api_key>'
     * })
     *
     * client.getSpace('<space_id>')
     * .then((space) => space.getLocale('<locale_id>'))
     * .then((locale) => {
     *   locale.name = 'New locale name'
     *   return locale.update()
     * })
     * .then((locale) => console.log(`locale ${locale.sys.id} updated.`))
     * .catch(console.error)
     * ```
     */
    update(): Promise<Locale>;
}
/**
 * @private
 * @param http - HTTP client instance
 * @param data - Raw locale data
 * @return Wrapped locale data
 */
export declare function wrapLocale(http: AxiosInstance, data: LocaleProps): LocaleProps & {
    toPlainObject(): LocaleProps;
};
/**
 * @private
 * @param http - HTTP client instance
 * @param data - Raw locale collection data
 * @return Wrapped locale collection data
 */
export declare function wrapLocaleCollection(http: AxiosInstance, data: CollectionProp<LocaleProps>): CollectionProp<LocaleProps> & {
    toPlainObject(): CollectionProp<LocaleProps>;
};
