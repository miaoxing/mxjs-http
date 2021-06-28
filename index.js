import $ from 'miaoxing';
import curUrl from '@mxjs/cur-url';

const api = {};

// HTTP methods

api.get = function (url, config) {
  return $.get($.apiUrl(url), config);
};

api.post = function (url, config) {
  return $.post($.apiUrl(url), config);
};

api.patch = function (url, config) {
  return $.patch($.apiUrl(url), config);
};

api.put = function (url, config) {
  return $.put($.apiUrl(url), config);
};

api.delete = function (url, config) {
  return $.delete($.apiUrl(url), config);
};

// Item

api.getCurItem = function (id, config) {
  return $.get(curUrl.apiShow(id), config);
};

api.postCurItem = function (id, config) {
  return $.post(curUrl.apiShow(id), config);
};

api.patchCurItem = function (id, config) {
  return $.patch(curUrl.apiShow(id), config);
};

api.putCurItem = function (id, config) {
  return $.put(curUrl.apiShow(id), config);
};

api.deleteCurItem = function (id, config) {
  return $.delete(curUrl.apiShow(id), config);
};

// Collection

api.getCurColl = function (config) {
  return $.get(curUrl.apiColl(), config);
};

api.postCurColl = function (config) {
  return $.post(curUrl.apiColl(), config);
};

api.patchCurColl = function (config) {
  return $.patch(curUrl.apiColl(), config);
};

api.putCurColl = function (config) {
  return $.put(curUrl.apiColl(), config);
};

api.deleteCurColl = function (config) {
  return $.delete(curUrl.apiColl(), config);
};

// Current page

api.getCur = function (config) {
  return $.get(curUrl.api(), config);
};

api.postCur = function (config) {
  return $.post(curUrl.api(), config);
};

api.patchCur = function (config) {
  return $.patch(curUrl.api(), config);
};

api.putCur = function (config) {
  return $.put(curUrl.api(), config);
};

api.deleteCur = function (config) {
  return $.delete(curUrl.api(), config);
};

/**
 * 提交当前页面对应的表单
 *
 * @experimental
 */
api.curForm = (config) => {
  return $.http({...curUrl.apiFormUrlAndMethod(), ...config});
};

/**
 * 后台允许返回的最大数据量
 *
 * @type {number}
 */
api.maxLimit = 500;

api.getMax = function (url, config) {
  return this.get(url, addLimit(config));
};

api.getMaxCurColl = function (config) {
  return this.getCurColl(addLimit(config));
};

function addLimit(config = {}) {
  if (typeof config.params === 'undefined') {
    config.params = {};
  }
  config.params.limit = api.maxLimit;
  return config;
}

export default api;
