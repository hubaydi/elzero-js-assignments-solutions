let re = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;

// https?: it means that (s) is optional.
//  :\/\/ = those are normal characters, they will follow http or https if s is found.
// (?:[-\w]+\.)? = this group is optional. can be found or not.
// ?: = this defines non-capturing group.
// [-\w]+ = this range will get anything in the group the order is not important.
// the + means it can repeat unlimited times.
// \. = this will get any Character [a-zA-Z0-9_]
// ([-\w]+) = this is group
// * zero or more.
// i = case-insensitive.
