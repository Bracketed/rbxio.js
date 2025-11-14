/**
 * @name Roblox.Users.Api.GenderResponse.Gender
 * @alias APIGender
 * @description The gender enum.
 */
enum APIGender {
	Unknown = 1,
	Male = 2,
	Female = 3,
}

/**
 * @name Roblox.Users.Api.GenderRequest
 * @alias APIGenderRequest
 * @description The description request object.
 */
interface APIGenderRequest {
	/**
	 * @name gender
	 * @description The gender.
	 */
	gender: APIGender | number;
}

/**
 * @name Roblox.Users.Api.GenderResponse
 * @alias APIGenderResponse
 * @description The description response object.
 */
interface APIGenderResponse {
	/**
	 * @name gender
	 * @description The gender.
	 */
	gender: APIGender;
}

export type { APIGender, APIGenderRequest, APIGenderResponse };
