// https://create.roblox.com/docs/cloud/legacy/users/v1#/

/**
 * @name Roblox.Users.Api.AuthenticatedGetUserResponse
 * @alias APIAuthenticatedGetUserResponse
 * @description
 * A response model representing absolute minimal authenticating user information.
 * No new attributes should be added to this response since it is in the critical path of app launch and we want to minimize dependencies.
 */
interface APIAuthenticatedGetUserResponse {
	/**
	 * @name id
	 * @description The user Id.
	 */
	id: number;
	/**
	 * @name name
	 * @description The user name.
	 */
	name: string;
	/**
	 * @name displayName
	 * @description The user DisplayName.
	 */
	displayName: string;
}

/**
 * @name Roblox.Users.Api.GetUserResponse
 * @alias APIGetUserResponse
 * @description A response model representing user information.
 */
interface APIGetUserResponse {
	/**
	 * @name id
	 * @description The user Id.
	 */
	id: number;
	/**
	 * @name name
	 * @description The user name.
	 */
	name: string;
	/**
	 * @name displayName
	 * @description The user DisplayName.
	 */
	displayName: string;
	/**
	 * @name description
	 * @description The user description.
	 */
	description: string;
	/**
	 * @name created
	 * @description When the user signed up.
	 */
	created: string;
	/**
	 * @name isBanned
	 * @description Whether the user is banned.
	 */
	isBanned: boolean;
	/**
	 * @name externalAppDisplayName
	 * @description Unused, legacy attribute. For now always null to not disturb existing client code that might rely on its existence.
	 * @deprecated Unused, legacy attribute.
	 */
	externalAppDisplayName: string | null;
	/**
	 * @name hasVerifiedBadge
	 * @description The user's verified badge status.
	 */
	hasVerifiedBadge: boolean;
}

/**
 * @name Roblox.Users.Api.MultiGetByUserIdRequest
 * @alias APIMultiGetByUserIdRequest
 * @description Request model for getting users by ids.
 */
interface APIMultiGetByUserIdRequest {
	/**
	 * @name userIds
	 * @description An array containing the user ids.
	 */
	userIds: Array<number>;
	/**
	 * @name excludeBannedUsers
	 * @description Whether the response should exclude banned users.
	 */
	excludeBannedUsers: boolean;
}

/**
 * @name Roblox.Users.Api.MultiGetByUsernameRequest
 * @alias APIMultiGetByUsernameRequest
 * @description Request model for getting users by ids.
 */
interface APIMultiGetByUsernameRequest {
	/**
	 * @name usernames
	 * @description An array containing usernames.
	 */
	usernames: Array<string>;
	/**
	 * @name excludeBannedUsers
	 * @description Whether the response should exclude banned users.
	 */
	excludeBannedUsers: boolean;
}

export type {
	APIAuthenticatedGetUserResponse,
	APIGetUserResponse,
	APIMultiGetByUserIdRequest,
	APIMultiGetByUsernameRequest,
};
