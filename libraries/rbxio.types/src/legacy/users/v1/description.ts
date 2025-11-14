/**
 * @name Roblox.Users.Api.DescriptionRequest
 * @alias APIDescriptionRequest
 * @description The description request object.
 */
interface APIDescriptionRequest {
	/**
	 * @name description
	 * @description The description.
	 */
	description: string;
}

/**
 * @name Roblox.Users.Api.DescriptionResponse
 * @alias APIDescriptionResponse
 * @description The description response object.
 */
interface APIDescriptionResponse {
	/**
	 * @name description
	 * @description The description.
	 */
	description: string;
}

export type { APIDescriptionRequest, APIDescriptionResponse };
