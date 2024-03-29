//
//  API-servies.js
//  <project>
//
//  Created by yann_liang on 2017-05-25.
//  Copyright 2017 yann_liang. All rights reserved.
//

import Http from 'axios'
import API from '@/config/API-config'

Http.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';

const encodeParams = (params) => {
    const r = '?',
        p = [];
    for (const key in params) {
        p.push(`${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`);
    }
    return r + p.join('&&');
};

// 请求类
class ApiService {
    constructor() {
        this.node = {
            join: this.post.bind(this, API.NODE.join),
            getAuditList: this.post.bind(this, API.NODE.getAuditList),
            getList: this.post.bind(this, API.NODE.getList),
            reviewList: this.post.bind(this, API.NODE.reviewList),
            reviewDetail: this.post.bind(this, API.NODE.reviewDetail),
            submitReview: this.post.bind(this, API.NODE.submitReview),
            applicationList: this.post.bind(this, API.NODE.applicationList),
            applicationDetail: this.post.bind(this, API.NODE.applicationDetail),
            details: this.post.bind(this, API.NODE.details),
        }
        this.chain = {
            create: this.post.bind(this, API.CHAIN.create),
            record: this.post.bind(this, API.CHAIN.record),
            getList: this.post.bind(this, API.CHAIN.getList),
            details: this.post.bind(this, API.CHAIN.details), // 链详情
            joinedList: this.post.bind(this, API.CHAIN.joinedList),
            getTradingVol: this.post.bind(this, API.CHAIN.getTradingVol),
            getBlockTotal: this.post.bind(this, API.CHAIN.blockTotal),
            getManageNode: this.post.bind(this, API.CHAIN.getManageNode),
            getChainNodes: this.post.bind(this, API.CHAIN.blockTotal),
        }
        this.user = {
            register: this.post.bind(this, API.USER.register),
            login: this.post.bind(this, API.USER.login),
            verificationCode: this.post.bind(this, API.USER.verificationCode),
            baseInfo: this.post.bind(this, API.USER.baseInfo),
            getMenuList: this.post.bind(this, API.USER.getMenuList),
            logout: this.post.bind(this, API.USER.logout),
        }

        this.interceptorsOfReq();
        this.interceptorsOfRes();
    }

    get(url, params) {
        if (params) {
            url += encodeParams(params);
            url += `&sessionid=${localStorage.sessionid}&userID=${localStorage.user ? JSON.parse(localStorage.user).userID : ''}`;
        }
        return Http.get(url).then(res => res.data);
    }

    post(url, params) {
        typeof params === 'undefined' ? params = {} : '';
        localStorage.sessionid ? params.sessionid = localStorage.sessionid : '';
        params.userID = localStorage.user ? JSON.parse(localStorage.user).userID : ''; ;
        return Http.post(url, params).then(res => res.data);
    }

    interceptorsOfReq() {
        return Http.interceptors.request.use(
            config => {
                console.log('请求URL== ' + config.url, '\n请求参数==', config.data);
                return config;
            },
            err => {
                return Promise.reject(err);
            });
    }

    interceptorsOfRes() {
        Http.interceptors.response.use(function(response) {
            console.log(response.config.url + '的响应数据↓↓↓\n', response.data);
            if (response.data.errorCode == 4) {
                localStorage.removeItem('sessionid');
                localStorage.removeItem('user');
                vueVm.loginPopFlag = true;
            }

            if (typeof response.data.data == null) {
                alert('没有查询到数据')
            };

            return response;
        }, function(error) {
            alert('请求失败');
            return Promise.reject(error);
        });
    }
}

// 导出一个对象
export default new ApiService();
