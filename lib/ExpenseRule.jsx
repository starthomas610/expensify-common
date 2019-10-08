import _ from 'underscore';

/**
 *  Represents a user's Personal Details object, which includes their
 *  - First name
 *  - Last name
 *  - Avatar
 */
export default class ExpenseRule {
    /**
     * Creates a new instance of this class.
     *
     * @param {Array} ruleArray
     */
    constructor(ruleArray) {
        _.each(ruleArray, (value, key) => {
            this[key] = value;
        });
    }

    /**
     * Returns the applyWhen array associated with the passed field
     * i.e. field == category returns [field: 'category', condition: 'matches', value: 'car']
     *
     * @param {string} field
     *
     * @return {Object}
     */
    getApplyWhenByField(field) {
        return _.find(this.applyWhen, (condition) => {
            return conditions.field === field;
        }) || {};
    }

    /**
     * Get the externalID saved deep in the tax field
     *
     * @returns {String}
     */
    getExternalTaxID() {
        return this.tax.field_id_TAX.externalID || '';
    }
};
