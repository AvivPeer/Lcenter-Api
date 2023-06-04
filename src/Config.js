var Config = {};

Config.server_name = "Learning Center";

Config.mega_download_link = "https://mega.nz/#!x8AgAAga!xUbcSuozRFsnSU7rM_M-iST2r_amvMDITp93hggzMl8";
Config.gdrive_download_link = "https://drive.google.com/uc?id=1slRJ9ZJqjHrsE5jhQayqx6NUUmCJcoEU&export=download";
Config.mega_launcher_link = "";
Config.gdrive_launcher_link = "https://drive.google.com/uc?authuser=0&id=1sGvo3LQWU3kTbQaQv1J-_Hi3wwQqHozP&export=download";

Config.forum_link = "https://my-ms.info/forums";//https://my-ms.info/forums

Config.recaptcha_key = "";

Config.version = 83;
Config.exp_rate = 1000;
Config.meso_rate = 250;
Config.drop_rate = 1;

Config.discord = {
    base_url: 'https://discordapp.com/widget',
    server_id: '562914051026452518',
    theme: 'light',
    width: 246,
    height: 400,
    allowtransparency: true,
    frameborder: 0
};

Config.twitter = {
    handle: 'MyMS'
};

Config.facebook = {
    base_url: 'https://www.facebook.com/',
    username: 'MyMS',
    width: 340,
    height: 500,
    small_header: false,
    adapt_container_width: true,
    hide_cover: false,
    show_facepile: true,
    scrolling: 'no',
    frameborder: 0,
    allowtransparency: true
};

Config.base_url = "https://sqlteachers.000webhostapp.com/index.php/";

Config.post_type = [
    'News',
    'Events'
];

Config.vote_sites = {
    gtop: {
        name: "GTOP 100",
        url: "https://gtop100.com/topsites/MapleStory/sitedetails/MyMS-v83-Custom-Server-95652",
        hours: 24,
        getPingback: function(username) {
            return "?vote=1&pingUsername=" + username;
        }
    },
    topg: {
        name: "TopG",
        url: "https://topg.org/maplestory-private-servers/in-511456-",
        hours: 12,
        getPingback: function(username) {
            return username;
        }
    },
    xtremetop: {
        name: "XtremeTOP100",
        url: "http://www.xtremetop100.com/in.php?site=1132367496",
        hours: 12,
        getPingback: function(username) {
            return "";
        }
    }
};

export default Config
