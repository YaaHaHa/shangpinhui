/* 

    利用Mockjs提供mock接口

*/
import Mock from 'mockjs'
import floors from './floors.json'
import recommends from './recommends.json'

Mock.mock('/mock/recommends', { code: 200, data: recommends });

Mock.mock('/mock/floors', { code: 200, data: floors });