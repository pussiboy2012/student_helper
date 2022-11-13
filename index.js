const TelegramApi = require('node-telegram-bot-api')

const token = "5412829417:AAFaDAZvVBRegC6Ozl46ekhZVfjX62n9jHM"

const bot = new TelegramApi(token, {polling: true}) 

bot.setMyCommands([
    {command: "/start", description: "Приветствие тебя на этом свете, мой золотой :3"},
    {command: "/help", description: "Список доступных(но это не точно)комманд"},
    {command: "/mem_p", description: "Ща как фото мем кину !"},
    {command: "/mem_v", description: "Ща как видео мем кину !"},
])
const keys = [
    'https://sun1-93.userapi.com/impg/mBGZ1UfwRjQbGI6IQIN1uoWOdM6XGNQu6J9o0g/WxR2kAq9sm0.jpg?size=1600x900&quality=95&sign=37e5219fab6a9313e9f6c4c2b96bbd5c&type=album',
    'https://sun1-25.userapi.com/impg/rg7IujBq9S1eXw_kmXD0FWcoZqoA7fCxt0Ihtg/_kxP_7mVKbU.jpg?size=224x224&quality=95&sign=d35fca048deba430a85f50cd628a124b&type=album',
    'https://sun1-30.userapi.com/impg/_q6u8kksFAzy0-xUni5mwC6HB5gdoCnrWo-tQA/cDiSrHP16jA.jpg?size=899x1080&quality=95&sign=669c259310f7ebc1dac7f22205b2bbaf&type=album',
    'https://sun9-79.userapi.com/impg/hMz4j9DBVfvVXTMdeHfbfAZy-HSLGBOQ093unA/0LTqoOYt73k.jpg?size=650x612&quality=95&sign=36a5b0b0a803b0c0ffaa939ba67b5f00&type=album',
    'https://sun9-83.userapi.com/impg/6mr_G9ROAs64t9mP0qvEcmgyZ6wZp0pru9Md9Q/VIMWjWkvFXQ.jpg?size=885x1920&quality=95&sign=5bc67977b35c1b67c5cd93a0d2c75d42&type=album',
    'https://sun9-86.userapi.com/impg/DTD_TY0VKU5lYGPBPMCOMv_AoBrzU1QxYZsu-A/CLWuR2ue_VE.jpg?size=600x369&quality=95&sign=a545422de467c4c0ab5883c0f43724aa&type=album',
    'https://sun9-40.userapi.com/impg/nlSaD-gyXCiiOU56fiR9PBJfv2ZLaWGhNnAnMw/nbVEop20evI.jpg?size=1280x938&quality=96&sign=74589725fd1b3fc9e6fcf4e075f73975&type=album',
    'https://sun1-95.userapi.com/impg/aIOSdy71ywBhezqpDBNT-oQtyRbdJhBSasDiaw/syYIaU-_lns.jpg?size=967x1080&quality=96&sign=68d3a6527ed85cc6d63e5d579486c3ec&type=album',
    'https://sun9-83.userapi.com/impg/6Tz8K8Xxzvugt-im_J7sg5LVTrXx_8apbTWwJw/igQsTIAbG_s.jpg?size=1080x899&quality=96&sign=4af6603aea855482a802cb60d338d055&type=album',
    'https://sun9-61.userapi.com/impg/4jkp6WRoYjCiKSivufU0pmDJSAXVXuaWJEzfbg/b-pWT8iNdkI.jpg?size=491x502&quality=95&sign=c918c9aceedc0aa174ad0554b5beae41&type=album',
    'https://sun9-42.userapi.com/impg/bz2Ndn206wZXb2PVCVsrS_4QBCFnduQZsyL4Fg/1zXdhXKM7nc.jpg?size=803x1080&quality=95&sign=e791190ba3802c6cfe6077fa4eb3953a&type=album',
    'https://sun9-15.userapi.com/impg/jAuebUl_8BPH6E1ggXE6TkZ-zvUg8AOj2eCgOA/HmlGKR9yZsk.jpg?size=810x1080&quality=95&sign=3603383c2064820b1ab9fcf6e8b23a07&type=album',
    'https://sun9-42.userapi.com/impg/REamnEPasw5U2rHYAypRLuVARcZZHbp3SGcUjA/JsSuW1qEsng.jpg?size=1440x1920&quality=95&sign=b269acfe227ce1893e1aa422f6272ce6&type=album',
    'https://sun9-66.userapi.com/impg/nXlF7GdyM3KymUzJo7Lb0zwz33O-TwlFP8wC6w/VwZqhe7EvvE.jpg?size=1440x1920&quality=95&sign=188d4b18b64b2652c1415b8cf3f49212&type=album',
    'https://sun9-80.userapi.com/impg/2OyoSHD5PKXa1GvW22YNliNPBjnh5Z9kLT-lfg/82cjoD_uhUs.jpg?size=1600x1200&quality=95&sign=e4745229ae7ba0ad712afb5a617cbf36&type=album',
    'https://sun9-88.userapi.com/impg/JvB_6AuQruQ3yhn0WYpkY10OLHkXbPraDKlILQ/nskHBe9fOK0.jpg?size=620x440&quality=96&sign=2be960f7cac6c8d57f5263c5424846d6&type=album',
    'https://sun9-72.userapi.com/impg/FgZ1j-y2SqgPgHWRHsroJYhHEdX8ioEViN-zug/bmUGqWr5nbk.jpg?size=1544x1030&quality=95&sign=e6372f4941cc8d1b4a73c0a462f89b7d&type=album',
    'https://sun9-68.userapi.com/impg/8q8V5_eVJ--kTNLGuevJ1i4z-OyYproWf_CwQg/-Mj61Ii09IA.jpg?size=876x1080&quality=95&sign=511febbd664170c78d9808a578a2b5a1&type=album',
    'https://sun9-53.userapi.com/impg/--j7VER4_Amz4eiEzKNS9gJ4TIcZ-EktfA1cyQ/sXZCbEA5BDo.jpg?size=640x640&quality=96&sign=506dbf55825080602d09535a31a303ae&type=album',
    'https://sun9-68.userapi.com/impg/B7DIckt6CFwYGEvHnk-2Stk--9tmfaN2dvOhng/kZ5aiK6TflA.jpg?size=674x638&quality=96&sign=97da9ff55b1f6a7c59a5b2b563c628d7&type=album',
    'https://sun9-54.userapi.com/impg/sSv-6odefoTvkfmhyiUU3Nx6dmZOeijRmXv9Bw/1rrIPG0Szqk.jpg?size=812x1080&quality=95&sign=2285b3f84d53aa899e0380ad4c8fc2d6&type=album',
    'https://sun9-63.userapi.com/impg/vBAw_Lsj88_8AjWU3Clj1HtGOkLkHz25xPRjqQ/fGLnQDEvKYg.jpg?size=1080x1072&quality=96&sign=5b653b57f0b64bf0f92465431deab19a&type=album',
    'https://sun9-1.userapi.com/impg/Cwiuq-5cEW1LsWDH8HuNJ3K0Kc0uvHM2FR0e5Q/1pD6lSiOlHc.jpg?size=1080x1249&quality=96&sign=9f142d0d88f338b15f40eba7a38557b6&type=album',
    'https://sun9-14.userapi.com/impg/c4F-4CpJNuAoDUShzuTkd7r5_ekUDVo4X2GVPg/YgRAYykL5rM.jpg?size=720x189&quality=96&sign=6ead05852625662d1dba85f4005b82bb&type=album',
    'https://sun9-31.userapi.com/impg/O31En1u_6MzEB9k5xPHRcIZCK8_AAGhCaxHRvw/NbgeXigHOTE.jpg?size=828x940&quality=96&sign=9399897513cda7cc724d526f583ec8cb&type=album',
    'https://sun9-15.userapi.com/impg/QtAS4F26V6KXwwmm5fdGyzjR7cQu88Kj0H1ArQ/R62A8s7Sing.jpg?size=894x444&quality=96&sign=ae900c1dd839a99bcc23019b43f66b95&type=album',
    'https://sun9-48.userapi.com/impg/Vkoju5YBWlJV2qoW4IsQ13BXatoWAS4Axw2fww/wjMQvoWkfxs.jpg?size=1024x785&quality=96&sign=5019938c985e810c45bb73b99342ad34&type=album',
    'https://sun9-53.userapi.com/impg/eqP-mhdpABrbLI5572cs4rNMjQkVlLhsT4jDCw/YeLKATyrow4.jpg?size=1600x1177&quality=96&sign=ca0471b12423159983ca02432718391d&type=album',
    'https://sun9-86.userapi.com/impg/gjZ0cXWKJXU7sf2MwZg-WMqEiazVFQdsKCtaOQ/x3Le205N4DM.jpg?size=1280x1218&quality=96&sign=32cd09eb275708540ad8b1e440fd0f8c&type=album',
    'https://sun9-73.userapi.com/impg/n8ikEco_a29m72kVxKVFGQus48eml5R-VylGVw/j7bncEw0u3U.jpg?size=1262x1080&quality=96&sign=12ba1df6d8c2ab891a646a9399203383&type=album',
    'https://sun9-5.userapi.com/impg/-mk7Ygw0b5iX-IpyB-E974tqVq0XY2q49Pd9TQ/iQ0WDxjF91M.jpg?size=720x1600&quality=95&sign=634b3441be1453264b1f7ccca91e9827&type=album',
    'https://sun9-48.userapi.com/impg/GnzC1M5J9srgyPhoSR2tYr5NRSK-XB8RL3fkTw/50F7RYqiGQs.jpg?size=1201x973&quality=96&sign=506129085ad1891923c7ba0ccfd0c999&type=album',
    'https://sun9-51.userapi.com/impg/zg5UFSi_ydkyW8rs8JZs51uOPxVfnoQpxeDQpQ/dNfSN7WOpao.jpg?size=1080x1064&quality=96&sign=86a8493b1f5dd65b899c14a4a1f5988f&type=album',
    'https://sun9-27.userapi.com/impg/lOOmBGiOO0gOxUahcI6fasU0chxNwBeyAgcNOg/fq0NYqfsilY.jpg?size=967x967&quality=96&sign=596ddeced283b73b03441229f3886ecc&type=album',
    'https://sun9-22.userapi.com/impg/iFMwtXOJntGZNTXZaojYF8j9R9lhRBZ0m_aMQg/R3djDvHsvck.jpg?size=637x482&quality=96&sign=99f3b0ce48f43f436d43d7a90dee2e3f&type=album',
    'https://sun9-78.userapi.com/impg/ZoTYH-t9mQCMPGH3rwCZPRtlKOXCoHOYh8j61g/gntA4dQtrlA.jpg?size=472x472&quality=96&sign=cf0b86c96c3afa3dd55ec839c1878e55&type=album',
    'https://sun9-87.userapi.com/impg/tU7WiWHizBnynPzBX_DAwORuZEQRclf9Bb01VA/5DasLcTkXXs.jpg?size=1200x1600&quality=96&sign=820a18c23c3588afcdc40b03457c4c62&type=album',
    'https://sun9-43.userapi.com/impg/lpEpVmQitDGOEGm6r4zwNWH7HP3hG_wQcPsiHw/ARun9noz5NE.jpg?size=1080x1080&quality=96&sign=aa4588e926497c56a3a67e78f59ae712&type=album',
    'https://sun9-62.userapi.com/impg/KlQwOWN4epnR1tEm3Pd0apLyjoNSqBIwR8nrRA/CJVEL51MeOc.jpg?size=1075x1080&quality=96&sign=7a244d7bd59fb09fc1311a0e72dc4e3d&type=album',
    'https://sun9-14.userapi.com/impg/v41XKrR8xI-GWE34kzXFcHHi_MEQq6V8qq6oVg/VQxS9RgeDwE.jpg?size=810x1080&quality=96&sign=536c5e1d0974f51dfd2572e629901432&type=album',
    'https://sun9-82.userapi.com/impg/lkR1wWjRxDBlVRchq1t1MjW3z0BMN6DQ9D5_7A/26_S0Ap0mpA.jpg?size=1440x1920&quality=95&sign=c4900481f88665599e60249ed39722bd&type=album',
    'https://sun9-87.userapi.com/impg/Ck1o4liBM4VgPpUYLliFhUmn7OHwTkyZPjdRWw/53vPzv-6mLg.jpg?size=1440x1920&quality=95&sign=4df37959f341a40dacee89edc3d6254d&type=album',
    'https://sun9-11.userapi.com/impg/arTFzccfBJfBvAJE57izTFqw5TCp3CpZxTO-aQ/_c6IY8N9M_4.jpg?size=600x339&quality=96&sign=ca028c3c4a601fd7740b527ceaa7ec3d&type=album',
    'https://sun1-15.userapi.com/impg/hHDQB_GPr7ypqV2idjjMDZ4mzi3UpNs3tuFHbg/uAc2ikLpaow.jpg?size=600x484&quality=96&sign=24a0ddf63ff3d20f772abc2cd640abee&type=album',
    'https://sun9-67.userapi.com/impg/7xK1bdOOmP0-8bTxKUm-JyzI_GkqdDm4P7Lp2g/UtP2oRbv_wk.jpg?size=1080x823&quality=95&sign=811f22977440062f4a7baadadc29665c&type=album',
    'https://sun9-72.userapi.com/impg/Ktb4K04TGfuCDcWlFMUm1LoODlP217ZjQPpWVA/EYuY2JbQtM8.jpg?size=2000x2000&quality=95&sign=6ef8dd8383470e1d905dfd86f7c36434&type=album',
    'https://sun1-21.userapi.com/impg/L08NrLbN4TMR6W6Uziim_4uUjXngfM8plzPnSg/tlC3E2IcZgk.jpg?size=1200x1472&quality=96&sign=c84fb918193f761be6df30b5778b4918&type=album',
    'https://sun9-64.userapi.com/impg/EOd2VdOjkbtlAHa6lF7dNhf-KKTSgZbYBfAilw/90_btlyTrcs.jpg?size=500x395&quality=95&sign=3977591e335b5f2b8d3b3f8d0b2dde8f&type=album',
    'https://sun9-19.userapi.com/impg/FtA3qTf8GfP78hIA8de8uVa1U3Zc47RFPBRzbA/iaEfW31-tS8.jpg?size=1280x852&quality=95&sign=69bccb1557622d1c8c4db1b770e084ba&type=album',
    'https://sun9-71.userapi.com/impg/PJUr3JBHMAiU5C9jHXDgVo6xDuGBLj8GOjqP9w/dUZC42jQf-M.jpg?size=1080x486&quality=95&sign=90583c83f7e6daa35b5548058297ddad&type=album',
    'https://sun9-52.userapi.com/impg/vSt7Qh6Wpum4V_YuxAXcReUm-DmjKe4tq_7z3A/5WoFSgh6sTI.jpg?size=1197x1600&quality=95&sign=ecf6cef325f62bf0fa25243f8b6ed656&type=album',
    'https://sun9-57.userapi.com/impg/7YxCjPZRt0lVWTcmI2NvXV5ZGRJnzO4JJnuHlA/m2OT5zXdbtQ.jpg?size=1270x941&quality=96&sign=8b429a59aadef928a60c93f857f1aed4&type=album',
    'https://sun9-22.userapi.com/impg/EYQjqquj8OekNYmWquCCxi4GUB0hj8m2uyRPnQ/5GcgMQkFmm4.jpg?size=556x283&quality=95&sign=7fce1a08cb633b966d6cfb96a95fbb7c&type=album',
    'https://sun1-24.userapi.com/impg/UxVi2-CkrwxObL0QepAufaquL_JFki29hVRIXA/capcxNS1kYQ.jpg?size=1488x1080&quality=95&sign=e75668ee4066541d6f73b103f408ebcc&type=album',
    'https://sun9-84.userapi.com/impg/oCoe8pPzj2nTrvl2DtpAP-NsnIeogC5ppaxLVw/fLB1neGJWtw.jpg?size=1600x1333&quality=95&sign=7c3436e26ffc9a0160f8825241280913&type=album',
    'https://sun9-82.userapi.com/impg/j-w7GVb5gD-WSM1OJ5tZmFo25VN5yeHqvTZikA/UmDZz90hgHY.jpg?size=464x310&quality=95&sign=096c4adca3360d4c536a8de75d64a6d1&type=album',
    'https://sun9-57.userapi.com/impg/GD6yrgrrjvsEvPR42vBtCR7AeWtTgtsMEyCH1g/yqB4ZEgZvI0.jpg?size=2560x1920&quality=96&sign=ccbac5bf0b759cf9458b01d16a7b4a6b&type=album',
    'https://sun9-7.userapi.com/impg/fqgSoHMozHx9pmV6wwp2XoPsRt0Afyh83f2cgw/2laKnQZqPBY.jpg?size=1092x1080&quality=95&sign=3ef4df0cd1665d9266c5003565f266aa&type=album',
    'https://sun9-34.userapi.com/impg/nlV1aly6s9HoX4f7cz3A21wJJU1Oh5ARVXgkvQ/nzvjqcrhEZg.jpg?size=1080x924&quality=95&sign=c8e404532f290229c9f0e8664e94ad74&type=album',
    'https://sun9-88.userapi.com/impg/fKXjegJDGSboEF2SOqx26uC4OJ2HLWC0KppnHQ/sI3Jsaum-t8.jpg?size=1920x937&quality=96&sign=92e2be808ff689908f27cf96132ecf3e&type=album',
    'https://sun9-63.userapi.com/impg/4GBlFOj8p0ucso534V1QRh-fVlqOeVg1yd_Skg/qgz3gK0enqg.jpg?size=1472x1472&quality=95&sign=2b04f641184a5b7f0a82e99721eb7e0b&type=album',
    'https://sun9-82.userapi.com/impg/gzoaD8-GWkYCKgZETgSuskacy0TIsrngkEDtxA/hD7sltk5JmU.jpg?size=864x1080&quality=95&sign=101e33ac170d3b57cdd6ccbfca37a49e&type=album',
    'https://sun1-98.userapi.com/impg/sqPyvkUfICZHPYd946E8KyMFhIZIYDBQ-XzUjw/dv3pCq6yXlc.jpg?size=1197x1600&quality=95&sign=66b976a2012c0120a668b21f02c622ec&type=album',
    'https://sun9-21.userapi.com/impg/1llDMYlvLXc6aBleYr1yyTiEGrSB7mdPy0qqKw/aIrdJWKTv7o.jpg?size=656x1080&quality=95&sign=f871319ba092bfbf436ac3c178b7badc&type=album',
    'https://sun1-25.userapi.com/impg/svtMq4_yw3mpS19SENYAQE61TJBoYe96hli8CQ/Y-NtesncU5E.jpg?size=1440x1920&quality=96&sign=51a352cef5f9c7dc0986bb3bce3b5bd0&type=album',
    'https://sun1-27.userapi.com/impg/Gr-tlMM18n88WeasxWqAolgBH9odxy4bOaVEYw/neXa1iB0yP0.jpg?size=960x1280&quality=96&sign=34756f80d376be14d73c697f768b5c20&type=album',
    'https://sun1-24.userapi.com/impg/8trz8TWEhgMvomAj1yCidhgp1LltZgDUFTpqtw/KanD-xmkStk.jpg?size=1440x1920&quality=96&sign=afa04020d554ac2604dd220e75870343&type=album',
    'https://sun1-99.userapi.com/impg/cSXySm2t0mBCrgRk0Dd7pPL52SlRWhQETPWFdg/4pl7weaJUNw.jpg?size=1484x1080&quality=96&sign=bc62aa57776b8568b7350ae1f89cc0a5&type=album',
    'https://sun1-97.userapi.com/impg/OtTIoDRZySZd5SLyC44JkNqOGYJZ4yvEK-OIwg/uQmZ2_ilbzg.jpg?size=1554x1080&quality=96&sign=4695c21ad0ab5f9cf41ae4304eb159a3&type=album',
    'https://sun9-81.userapi.com/impg/d7nAZ4WL9LGXd4RraMe7QFCSuwP8fxqpusqSCQ/nk2-ZppTTkc.jpg?size=1500x1080&quality=96&sign=46ba2376beab07b4cc1d15ce04ebba43&type=album',
    'https://sun1-57.userapi.com/impg/hqYyoj2JJaalBs1E5YttOdkoBLiduIdROPDadA/_eC4XKZbERc.jpg?size=1633x1080&quality=96&sign=5eac43ecb956a2d7911fc0c8c603507d&type=album',
    'https://sun9-36.userapi.com/impg/978x8yAti6H2uE0U9_oXjM12bZMdbnVcdSc1cA/SosIhWQUo1Q.jpg?size=1600x900&quality=95&sign=afeadb8114d4297d27870304948b8688&type=album',
    'https://sun9-51.userapi.com/impg/DyI0WByGYsVEun37_1vW1-iF5emm3JBOPw0UoA/FVVz7aS4kvY.jpg?size=1200x1200&quality=96&sign=e69b7ce5d3799d91e13d7eb1b72a07bf&type=album',
    'https://sun1-25.userapi.com/impg/svtMq4_yw3mpS19SENYAQE61TJBoYe96hli8CQ/Y-NtesncU5E.jpg?size=1440x1920&quality=96&sign=51a352cef5f9c7dc0986bb3bce3b5bd0&type=album',
    'https://sun9-44.userapi.com/impg/r4fyqmeYcmF1-aJ0eaZm3Hrm8MyTw_8iPoxHCQ/6ouGYn4dA3o.jpg?size=1600x901&quality=95&sign=5f2a6717b131536033c096a487a70008&type=album',
    'https://sun9-2.userapi.com/impg/OYVOtAbbhULXjXbImVc6WRM-5CR3buIYLK0SLg/Yo8oHhTIr3U.jpg?size=1440x1080&quality=95&sign=100aaf78e5a144bac46149be850073c2&type=album',
    'https://sun9-56.userapi.com/impg/fh7IL2PaajkcdhZ6wZSwF3lRyVWhl5FE8H-M1w/XtOQfguQ4D0.jpg?size=1242x1210&quality=96&sign=4b03c666509a559a41d5c53f05df748d&type=album',
    'https://sun9-50.userapi.com/impg/MwlJTWAb6QtbqlBvBuuobEyyhuBZmuEvKHSfAw/im_yMkSEt4Y.jpg?size=2560x1811&quality=95&sign=7dcf4b407929ce97443d8296b76e461f&type=album',
    'https://sun9-30.userapi.com/impg/Kmg66I5W0_DqxYmU_AwSNdmb0FFfqvCdS3nBtg/ZFHGOeUsMzs.jpg?size=1280x720&quality=96&sign=d4fd85d69861e291e485f72268d73123&type=album',
    'https://sun9-51.userapi.com/impg/CbGdGUfb-0X1Lf1l0x4-2xQX4I0bzCUEn_2zyA/0BpzkoaHVUs.jpg?size=604x340&quality=96&sign=6d5101d49de0b0c13171366a151e7751&type=album',
    'https://sun9-17.userapi.com/impg/pDfMmmdCAwAL5lQjiWsu5ixigdvTgb5ftea54g/Abjel_b4tYs.jpg?size=810x1080&quality=95&sign=46d1eb8739c840780c913dbd6040ae0a&type=album',
    'https://sun9-81.userapi.com/impg/BBb6uBzj6-YxuuDeehJOCejkPEaiOUJPivYYSQ/L9DDv50D9Jw.jpg?size=1280x909&quality=95&sign=337b5488d568dc73fcbd58d2fc6df7da&type=album',
    'https://sun9-88.userapi.com/impg/NGuLm-pnj5mY0MNAedEdK08QR_hzZT9Cj9W3EQ/dVwQ7q3THq4.jpg?size=678x678&quality=95&sign=1b960e3ad6a18979df523c2297169b25&type=album',
    'https://sun9-14.userapi.com/impg/u7nZhAf92najuT39bjuIMzU1CtSNTFw2ByYYzA/whl-CpAVKds.jpg?size=1440x1920&quality=95&sign=bf721af8ede0939215264c185839bfa7&type=album',
    'https://sun9-86.userapi.com/impg/rxV3T6wDQ2dohpVvq9jjp6ar3Ujp6Ray7fYYcw/i3Cu_RjuEBE.jpg?size=828x970&quality=95&sign=9cf626e4b21ad07105650576e5b0d431&type=album',
    'https://i.pinimg.com/564x/bd/23/7b/bd237b3ddafed46c04b2f472a619f880.jpg',
    'https://i.pinimg.com/564x/5f/b3/f8/5fb3f85880bed2f9c7823a0ed1a8c2fa.jpg',
    'https://i.pinimg.com/564x/58/c6/ac/58c6ac7bf5d684dc35d6d48019e860c0.jpg',
    'http://pm1.narvii.com/7191/196ad019777d000159d84a5da35ab423a2b03f18r1-960-778v2_uhq.jpg',
    'https://i.ytimg.com/vi/LFi9yfO7Q5w/maxresdefault.jpg',
    'https://pm1.narvii.com/7121/15a38eb5fe08fa0b52ca7ee0d61d462e721f8e2ar1-544-400v2_hq.jpg',
    'http://pm1.narvii.com/7173/b36cd3a8d6e7acc4ec2f07ae03a30d946193d8a8r1-604-430v2_uhq.jpg'
]
const IDbase = [
    825390341, // это рома (я)
    819662111, // это булат
    844334835, // это саня
//    907510044, // это морозов саня
]

bot.on('message', async msg=> {
    const text = msg.text;
    const NumMEMS = 90;
    const chatID = msg.chat.id;
    const name = msg.from.first_name;
    const random = Math.floor(Math.random() * NumMEMS);
    console.log(msg)
    var tetr = 0;
    var today = new Date();
    const now = today.toLocaleString();
    console.log(`%c сейчас на часах: ${now}`, 'color: #bada55');

    if (text === "/start"){
        return bot.sendMessage(chatID, `Приветствую тебя, ${name}👋
Я буду помогать тебе в учебе! Чтобы узнать мои возможности, воспользуйся командой /help 
👇🏻👇🏻👇🏻`);
    }
    if (text === "/help"){
        return bot.sendMessage(chatID, `
/time – расписание сегодняшнего дня
/here – отметиться на занятии
/nothere – уведомить старосту об отсутствии
/debt – просмотреть долги по учёбе
/homework – узнать о домашнем задании
/guide – узнать расположение аудитории
/note – заметки
/market – маркетплейс, для помощи с работами
/mem_p - мемы
/mem_v – локальные мемы
/lecture – все доступные лекции
/list – узнать свой номер в списке по предмету`)
    }
    if (text === "/mem_p"){
        await bot.sendMessage(chatID, `${name}, много хочешь ...`)
        console.log(`${keys[random]}`);
        return await bot.sendPhoto(chatID, `${keys[random]}`)
//        return bot.sendPhoto(chatID, `MEMS/${random}.jpg`)
    }
    if (text === "/mem_v"){
        await bot.sendMessage(chatID, `${name},отстань`)
        return // await bot.sendVideo(chatID, 'MEMS/23.mp4')
    }
    if (chatID === IDbase[0]){
        if (text === "/owerSend"){
            bot.sendMessage(IDbase[0],"что пишем?")
            bot.on('message', async mysg=> {
                var TEEEXT = mysg.text
                for(var i=0;i<IDbase.length;i++){
                    await bot.sendMessage(IDbase[i],`${TEEEXT}`)
                    console.log('I sended :)')
                }
            })
            bot.off
        }
    }
    return bot.sendMessage(chatID, `${name}, я тебя не понимаю...`)
})


////https://api.telegram.org/bot5412829417:AAFaDAZvVBRegC6Ozl46ekhZVfjX62n9jHM/sendMessage?chat_id=825390341&text=салам_брат