/* 小米社区签到脚本配置文件 */
var config = {
    // 解锁配置
    解锁方式: 1,           // 解锁方式：1=图案解锁, 2=数字密码, 其他=上滑解锁
    锁屏数字密码: "000000", // 数字密码（解锁方式=2时生效）
    锁屏图案坐标: [         // 图案解锁坐标（解锁方式=1时生效）
        [284, 1479],      
        [540, 1479],    //每个中括号内代表一个点位的x和y坐标
        [792, 1479],    //添加或减少点位数量时，注意遵循原格式。
        [540, 1732],
        [284, 1987],
        [540, 1987],
        [792, 1987]
    ],
    
    totaltime: 200,         //脚本运行时长限制(单位: 秒)
    
    // 功能开关（1 = 启用, 0 = 禁用）
    小程序签到: 1,
    成长值记录: 1,  
    浏览帖子: 1,
    加入圈子: 0,     
    观看视频: 0,   
    米粉节: 0,    
    感恩季: 0,
    双旗舰: 1,
    拔萝卜: 1      
};

module.exports = config; // 导出配置