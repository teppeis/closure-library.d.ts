declare module goog.format {

    /**
     * Formats an email address string for display, and allows for extraction of
     * The individual componants of the address.
     * @param {string=} opt_address The email address.
     * @param {string=} opt_name The name associated with the email address.
     * @constructor
     * @final
     */
    export class EmailAddress {
        constructor(opt_address?: string, opt_name?: string);
        
        /**
         * Get the name associated with the email address.
         * @return {string} The name or personal portion of the address.
         */
        getName(): string;
        
        /**
         * Get the email address.
         * @return {string} The email address.
         */
        getAddress(): string;
        
        /**
         * Set the name associated with the email address.
         * @param {string} name The name to associate.
         */
        setName(name: string): void;
        
        /**
         * Set the email address.
         * @param {string} address The email address.
         */
        setAddress(address: string): void;
        
        /**
         * Return the address in a standard format:
         *  - remove extra spaces.
         *  - Surround name with quotes if it contains special characters.
         * @return {string} The cleaned address.
         * @override
         */
        toString(): string;
        
        /**
         * Determines is the current object is a valid email address.
         * @return {boolean} Whether the email address is valid.
         */
        isValid(): boolean;
        
        /**
         * Checks if the provided string is a valid email address. Supports both
         * simple email addresses (address specs) and addresses that contain display
         * names.
         * @param {string} str The email address to check.
         * @return {boolean} Whether the provided string is a valid address.
         */
        static isValidAddress(str: string): boolean;
        
        /**
         * Checks if the provided string is a valid address spec (local@domain.com).
         * @param {string} str The email address to check.
         * @return {boolean} Whether the provided string is a valid address spec.
         */
        static isValidAddrSpec(str: string): boolean;
        
        /**
         * Checks if the provided string is a valid local port (part before the '@') of
         * an email address.
         * @param {string} str The local part to check.
         * @return {boolean} Whether the provided string is a valid local part.
         */
        static isValidLocalPartSpec(str: string): boolean;
        
        /**
         * Checks if the provided string is a valid domain port (part after the '@') of
         * an email address.
         * @param {string} str The domain part to check.
         * @return {boolean} Whether the provided string is a valid domain part.
         */
        static isValidDomainPartSpec(str: string): boolean;
        
        /**
         * Parse an email address of the form "name" &lt;address&gt; into
         * an email address.
         * @param {string} addr The address string.
         * @return {!goog.format.EmailAddress} The parsed address.
         */
        static parse(addr: string): goog.format.EmailAddress;
        
        /**
         * Parse a string containing email addresses of the form
         * "name" &lt;address&gt; into an array of email addresses.
         * @param {string} str The address list.
         * @return {!Array.<!goog.format.EmailAddress>} The parsed emails.
         */
        static parseList(str: string): Array<goog.format.EmailAddress>;
    }
}
