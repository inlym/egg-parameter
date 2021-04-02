'use strict'

exports.validate = {
	validateRoot: false,
	convert: false,

	/** 参数错误时，返回的 HTTP 状态码 */
	statusCode: 422,

	/** 参数错误时，返回的 HTTP 状态消息 */
	statusMessage: 'Validation Failed',

	/**
	 * 参数错误时，返回的错误信息模式：
	 * 1. 'all' - 完整的错误内容
	 * 2. 'first' - 仅第一条错误
	 * 3. 'field' - 仅错误的字段名
	 * 4. 'none' - 不返回错误信息
	 */
	errorMode: 'all',

	/**
	 * 返回错误的字段名
	 */
	errorName: 'errors',

	/**
	 * 附加的响应体内容
	 */
	attached: {
		code: 'invalid_param',
	},
}
