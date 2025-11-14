/**
 * @name Roblox.Users.Api.BirthdateRequest
 * @alias APIBirthdateRequest
 * @description The birthdate request object.
 */
interface APIBirthdateRequest {
    /**
     * @name birthMonth
     * @description The birth month.
     * @type number
     */
    birthMonth: number;
    /**
     * @name birthDay
     * @description The birth day.
     * @type number
     */
    birthDay: number;
    /**
     * @name password
     * @description Password.
     * @type string
     */
    password: string;
}

/**
 * @name Roblox.Users.Api.BirthdayResponse
 * @alias APIBirthdayResponse
 * @description The birthdate response object.
 */
interface APIBirthdayResponse {
    /**
     * @name birthMonth
     * @description The birth month.
     * @type number
     */
    birthMonth: number;
        /**
     * @name birthDay
     * @description The birth day.
     * @type number
     */
    birthDay: number;
    /**
     * @name birthYear
     * @description The birth year.
     * @type number
     */
    birthYear: number;
}

export type { APIBirthdateRequest, APIBirthdayResponse };

