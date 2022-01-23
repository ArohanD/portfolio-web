"use strict";
exports.__esModule = true;
exports.convertStringToDate = exports.convertToSlug = exports.isNotNavDupe = exports.copy = exports.allocateArray = exports.sanitizeTitle = void 0;
//Get rid of hyphens for auto-generated page titles.
var sanitizeTitle = function (rawString) {
    return rawString.split("-").join(" ");
};
exports.sanitizeTitle = sanitizeTitle;
var allocateArray = function (orig, numKids) { };
exports.allocateArray = allocateArray;
var copy = function (orig) { return JSON.parse(JSON.stringify(orig)); };
exports.copy = copy;
var isNotNavDupe = function (target, array) {
    var titleArray = array.map(function (link) { return link.title; });
    return !titleArray.includes(target.title);
};
exports.isNotNavDupe = isNotNavDupe;
var convertToSlug = function (string) {
    return string.split(" ").join("-").toLowerCase();
};
exports.convertToSlug = convertToSlug;
var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
];
var convertStringToDate = function (string) {
    var date = new Date(string);
    return months[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear();
};
exports.convertStringToDate = convertStringToDate;
