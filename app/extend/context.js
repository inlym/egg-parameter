'use strict'

module.exports = {
	/**
	 * 调用 Parameter 类实例化对象后的 validate 方法
	 *
	 * @param  {object} rule 检验规则
	 * @param  {object} [value] 被检验的内容，默认为请求体
	 */
	validate(rule, value) {
		value = value || this.request.body
		const errors = this.app.validator.validate(rule, value)
		if (errors) {
			const { statusCode, statusMessage, errorMode, errorName, attached = {} } = this.config

			/** 响应体 */
			const resData = {}

			if (errorMode === 'all') {
				resData[errorName] = errors
			} else if (errorMode === 'first') {
				resData[errorName] = errors[0]
			} else if (errorMode === 'field') {
				resData[errorName] = errors.map((item) => {
					return item.field
				})
			}
			Object.assign(resData, attached)
			this.throw(statusCode, statusMessage, resData)
		}
	},
}
