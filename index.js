import $ from 'miaoxing';
import curUrl from '@mxjs/cur-url';
import app from '@mxjs/app';

const http = {};

http.get = function (url, options) {
  return $.get(app.apiUrl(url), options);
};

http.post = function (url, options) {
  return $.post(app.apiUrl(url), options);
};

http.cur = function (config) {
  return $.get(curUrl.api(), config);
};

http.curIndex = function (config = null) {
  return $.get(curUrl.apiIndex(), config);
};

http.curShow = function (id = null, config = null) {
  return $.get(curUrl.apiShow(id), config);
};

http.curCreate = function (config = null) {
  return $.post(curUrl.apiCreate(), config);
};

http.curUpdate = function (config = null) {
  return $.post(curUrl.apiUpdate(), config);
};

http.curDestroy = function (id = null, config = null) {
  return $.post(curUrl.apiDestroy(id), config);
};

http.curForm = function (config = null) {
  return $.post(curUrl.apiForm(), config);
};

http.curPath = function (path, config = null) {
  return $.get(curUrl.toApi(path), config);
};

export default http;
