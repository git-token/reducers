'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DEFAULT_STATE = {
  activeStep: 'welcome',
  steps: {
    welcome: {
      title: 'Welcome',
      link: '/account/setup/'
    },
    terms: {
      title: 'Terms of Service',
      link: '/account/setup/terms'
    },
    metamask: {
      title: 'Setup MetaMask',
      link: '/account/setup/metamask'
    },
    register: {
      title: 'Register Account',
      link: '/account/setup/register'
    },
    organization: {
      title: 'Register Organization',
      link: '/account/setup/organization'
    },
    finish: {
      title: 'Finish',
      link: '/account/setup/finish'
    }
  },
  termsOfService: '\n    GitToken ("GTK") uses GitToken products and services ("Services"). These Services are provided as open-source software by contributors at the GitHub organization Uniform Resource Locator ("URL") https://github.com/git-token.\n\n    In addition to these Terms of Service ("ToS"), there may be other GitToken Services with specific ToS. Those ToS extend to this ToS agreement, and this ToS agreement extends to those specific ToS between GitToken and you when you use those Services.\n\n    GitToken provides these Services in hopes that they will enable organizations, like GTK, to better incentivize and reward contributors, automatically manage Ethereum token distributions, and provide new access to funding for software development.\n\n    By using GitToken Services you are agreeing to these terms.\n\n    Please read the following ToS carefully before using any GitToken service.\n\n    Versions of this ToS can be found at https://github.com/git-token/documentation/blob/master/tos/terms_of_services.md.\n\n\n    Use of GitToken Services\n\n    GitToken provides software for automating Ethereum token issuances, distributions, and offerings that correspond to GitHub contribution events, such as a pull request or milestone being reached.\n\n    GitToken token offerings may only take place on GitToken provided user interfaces. The purpose of GitToken is to better incentivize and reward contributors, automatically manage Ethereum token distributions, and provide new access to funding for software development.\n\n\n    GitHub Account Information\n\n    GitToken is not affiliated with GitHub.\n\n    GitToken Services requests access to your public GitHub information using Open Authorization ("OAuth"). This information is used by the GitToken software to verify your identity with the following contract, 0x0, ("Contract") and map token distributions to your Ethereum public address based on your GitHub username.\n\n    By using GitToken software, your GitHub contributions, username, and email are made public in the Ethereum blockchain. You agree to not impersonate or misrepresent your GitHub identity.\n\n    If your organization uses private repositories, this may violate your organization\'s policies as a result of some information being made public.\n\n    Consult with your organization before using GitToken.\n\n\n    Organizations Using GitToken\n\n    All organizations using GitToken Services retain intellectual property rights over their software.\n\n    GitToken provides software that enables organizations to issue nominal amounts of Ethereum tokens in exchange for contributions in organizations\' GitHub repositories.\n\n    Organizations may set custom values for token distributions corresponding to GitHub events, or alternatively can use the default values.\n\n    In cases where the organization may wish to watch only certain repostories or events, they may select those options using the GitHub organization settings webpage on the GitHub official website.\n\n    If you are using GitToken Services as an agent on behalf of an organization, the organization in which you represent thereby accepts these terms.\n\n    It will hold harmless and indemnify GitToken and its contributors from any claim, suit or action arising from or related to the use of the Services or violation of these ToS, including any liability or expense arising from claims, losses, damages, suits, judgments, litigation costs and attorneys\u2019 fees.\n\n\n    Modifying and Cancellation of Services\n\n    GitToken retains the right to modify and cancel our services. GitToken service changes can be found in the change log for the service release. Any features can be requested by opening an issue on GitToken\'s GitHub repository pages.\n\n    GitToken will make public announcements and provide an adequate period of time for you to retrieve any personal data that may be lost or compromised in the event of a service cancellation.\n\n\n    Regulatory Compliance\n\n    GitToken asserts tokens issued using GitToken Services are not financial securities.\n\n    GitTokens are reward points issued to GitHub users when contributions are made toward an organizations\' GitHub repositories.\n\n    Any benefit flowing to the contributor or organization is done so in the direct renumeration of tokens given to the contributor in exchange for work rendered.\n\n    Tokens issued reflect intellectual property contributed to an organization, but do not reflect intellectual property rights, royalties, or guarantees of any future profit or benefit.\n\n    GitToken does not restrict issued tokens from being interchanged using third party contracts and services. GitToken does not restrict the organization using the software from ascribing additional properties to the token.\n\n    Any additional ascribed value, monetary or otherwise, is derived from the utility of the token and the features integrated with the token.\n\n    Any additional features added or integrated into the organization\'s software that may alter the characteristics of the token are completed at the sole discretion and liability of the organization using the Services.\n\n    GitToken, and its contributors, will not be held accountable for any claim, damage, implied warranties, or fine for any token resembling a financial security for any reason.\n\n    In the event that GitToken receives notice pertaining to the determination of GitToken issued tokens resembling financial securities from financial regulation authorities (e.g. Securities & Exchange Commission), GitToken contributors will determine next steps, including ceasing access to parties in affected jurisdictions and applying for exemption where its reasonable to continue operations.\n\n    GitToken is obligated to comply and aid in the enforcement of all applicable laws. In the event that law enforcement requests help in investigating illegal activity, GitToken will support such investigations.\n\n\n    Copyright, Services Liabilities & Limitations\n\n    In most cases, GitToken software is provided under the MIT license:\n\n    Copyright 2017 GitToken\n\n    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\n\n    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n\n    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n\n    Extended Limited Liability\n\n    WHEN PERMITTED BY LAW, GITTOKEN, AND GITTOKEN CONTRIBUTORS, WILL NOT BE RESPONSIBLE FOR LOST PROFITS, REVENUES, OR DATA, FINANCIAL LOSSES OR INDIRECT, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES.\n\n    TO THE EXTENT PERMITTED BY LAW, GITTOKEN, AND ITS CONTRIBUTORS, WILL NOT BE RESPONSIBLE FOR ANY CLAIM, DAMAGE, IMPLIED WARRANTIES, OR FINE FOR ANY TOKEN RESEMEBLING A FINANCIAL SECURITY FOR ANY REASON.\n\n    TO THE EXTENT PERMITTED BY LAW, THE TOTAL LIABILITY OF GITTOKEN, AND ITS CONTRIBUTORS, FOR ANY CLAIMS UNDER THESE TERMS, INCLUDING FOR ANY IMPLIED WARRANTIES, IS LIMITED TO THE AMOUNT YOU PAID US TO USE THE SERVICES (OR, IF WE CHOOSE, TO SUPPLYING YOU THE SERVICES AGAIN).\n\n    IN ALL CASES, GITTOKEN, AND ITS CONTRIBUTORS, WILL NOT BE LIABLE FOR ANY LOSS OR DAMAGE.\n\n\n    Acceptance of Terms of Services\n    By accepting these ToS and using these Services, you agree to:\n\n    be at least 18 years old (or at least 13 years old with parent consent) and to have full capacity to enter contract under applicable law;\n    only use GitToken Services using accounts associated with your GitHub account and not impersonate or misrepresent your identity;\n    only use GitToken Services with tokens or Ethereum (ETH) legally obtained and owned or authorized to be managed by you;\n    not undertaking or abetting any unlawful activity through use of GitToken Services and comply with all applicable laws;\n    assume liability of all financial risk of using GitToken Services, including complete loss of ETH, tokens, or any digital asset used in GitToken Services;\n    our right to terminate these Services to you for any reason;\n  '
};

var AccountSetup = function AccountSetup() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_STATE;
  var action = arguments[1];
  var type = action.type,
      id = action.id,
      value = action.value;

  switch (type) {
    case 'SET_ACCOUNT_SETUP_DETAILS':
      return _extends({}, state, _defineProperty({}, id, value));
      break;
    default:
      return state;
  }
};

exports.default = AccountSetup;