(function(){
var translateObjs = {};
function trans(c, d) {
    var e = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[e[0x0]] = e;
    return '';
}
function regTextVar(f, g) {
    var h = ![];
    return i(g);
    function i(p, q) {
        switch (p['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var s = function () {
                switch (p['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }();
            if (s) {
                return function () {
                    var x, y;
                    var z = (q && q['viewerName'] ? this['getComponentByName'](q['viewerName']) : undefined) || this['getMainViewer']();
                    if (p['toLowerCase']()['startsWith']('photo'))
                        x = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (B) {
                            var C = B['get']('player');
                            return C && C['get']('viewerArea') == z;
                        })['map'](function (D) {
                            return D['get']('media')['get']('playList');
                        });
                    else {
                        x = this['_getPlayListsWithViewer'](z);
                        y = o['bind'](this, z);
                    }
                    if (!h) {
                        for (var A = 0x0; A < x['length']; ++A) {
                            x[A]['bind']('changing', k, this);
                        }
                        h = !![];
                    }
                    return n['call'](this, x, s, y);
                };
            }
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](p);
            };
        default:
            if (p['toLowerCase']()['startsWith']('viewer.')) {
                var t = p['split']('.');
                var u = t[0x1];
                if (u) {
                    var v = t['slice'](0x2)['join']('.');
                    return i(v, { 'viewerName': u });
                }
            } else if (p['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                var w = undefined;
                var s = function () {
                    switch (p['toLowerCase']()) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var E = /quiz\.([\w_]+)\.(.+)/['exec'](p);
                        if (E) {
                            w = E[0x1];
                            switch ('quiz.' + E[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (s) {
                    return function () {
                        var F = this['get']('data')['quiz'];
                        if (F) {
                            if (!h) {
                                if (w != undefined)
                                    if (w == 'global') {
                                        var H = this['get']('data')['quizConfig'];
                                        var J = H['objectives'];
                                        for (var L = 0x0, N = J['length']; L < N; ++L) {
                                            F['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], m['call'](this, J[L]['id'], s), this);
                                        }
                                    } else {
                                        F['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], m['call'](this, w, s), this);
                                    }
                                else
                                    F['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], l['call'](this, s), this);
                                h = !![];
                            }
                            try {
                                var O = 0x0;
                                if (w != undefined) {
                                    if (w == 'global') {
                                        var H = this['get']('data')['quizConfig'];
                                        var J = H['objectives'];
                                        for (var L = 0x0, N = J['length']; L < N; ++L) {
                                            O += F['getObjective'](J[L]['id'], s);
                                        }
                                    } else {
                                        O = F['getObjective'](w, s);
                                    }
                                } else {
                                    O = F['get'](s);
                                    if (s == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        O += 0x1;
                                }
                                return O;
                            } catch (P) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function j() {
        var Q = this['get']('data');
        Q['updateText'](Q['translateObjs'][f]);
    }
    function k(R) {
        var S = R['data']['nextSelectedIndex'];
        if (S >= 0x0) {
            var T = R['source']['get']('items')[S];
            var U = function () {
                T['unbind']('begin', U, this);
                j['call'](this);
            };
            T['bind']('begin', U, this);
        }
    }
    function l(V) {
        return function (W) {
            if (V in W) {
                j['call'](this);
            }
        }['bind'](this);
    }
    function m(X, Y) {
        return function (Z, a0) {
            if (X == Z && Y in a0) {
                j['call'](this);
            }
        }['bind'](this);
    }
    function n(a1, a2, a3) {
        for (var a4 = 0x0; a4 < a1['length']; ++a4) {
            var a5 = a1[a4];
            var a6 = a5['get']('selectedIndex');
            if (a6 >= 0x0) {
                var a7 = a2['split']('.');
                var a8 = a5['get']('items')[a6];
                if (a3 !== undefined && !a3['call'](this, a8))
                    continue;
                for (var a9 = 0x0; a9 < a7['length']; ++a9) {
                    if (a8 == undefined)
                        return '';
                    a8 = 'get' in a8 ? a8['get'](a7[a9]) : a8[a7[a9]];
                }
                return a8;
            }
        }
        return '';
    }
    function o(aa, ab) {
        var ac = ab['get']('player');
        return ac !== undefined && ac['get']('viewerArea') == aa;
    }
}
var script = {"scrollBarColor":"#000000","hash": "128c65761b30e87f55091eca7e1067083b8b494808a8bb9ee8450c5ffcaad2a5", "definitions": [{"iconURL":"skin/IconButton_3F5151E9_2CED_94A9_41BF_194B62BC60F5.png","left":15,"id":"IconButton_3F5151E9_2CED_94A9_41BF_194B62BC60F5","backgroundColor":[],"data":{"name":"ICON_IMG_LE"},"horizontalAlign":"center","verticalAlign":"middle","transparencyActive":true,"propagateClick":false,"top":10,"backgroundColorRatios":[],"minHeight":1,"minWidth":1,"backgroundOpacity":0.3,"width":28,"class":"IconButton","height":38,"click":"this.openLink(this.translate('LinkBehaviour_4BD6B341_5CE1_8F77_41C3_18CE51659A8C.source'), '_blank')"},{"scrollBarColor":"#000000","backgroundImageUrl":"skin/Container_3E22F5E6_2CEE_9CDB_41B3_3F807005E476.png","data":{"name":"CT_ICON_LD"},"id":"Container_3E22F5E6_2CEE_9CDB_41B3_3F807005E476","gap":10,"right":0,"scrollBarMargin":2,"layout":"absolute","overflow":"scroll","propagateClick":false,"bottom":"0%","minWidth":20,"minHeight":20,"width":85,"class":"Container","height":60,"children":["this.IconButton_3EC0D325_2CF3_B55E_4191_975719C16724"]},{"manualRotationSpeed":1200,"timeToIdle":15000,"class":"PanoramaCamera","initialPosition":{"pitch":0,"class":"PanoramaCameraPosition","hfov":125,"yaw":0},"enterPointingToHorizon":true,"idleSequence":"this.sequence_579C0684_5C9F_89FD_41B4_524A8D4B4423","id":"panorama_567671AA_5C9F_8B35_41D2_734A9FF1CC03_camera","initialSequence":"this.sequence_579C0684_5C9F_89FD_41B4_524A8D4B4423"},{"adjacentPanoramas":[{"data":{"overlayID":"overlay_52E631E3_5CA3_8B34_41D1_1CFFF808A6A3"},"panorama":"this.panorama_5679FD48_5C9F_9B75_41B0_A1034AAA0F8D","class":"AdjacentPanorama","yaw":179.99,"distance":100,"backwardYaw":10.63,"select":"this.overlay_52E631E3_5CA3_8B34_41D1_1CFFF808A6A3.get('areas').forEach(function(a){ a.trigger('click') })"},{"data":{"overlayID":"overlay_51589FEC_5CA2_970D_41D4_CA639D4D0856"},"panorama":"this.panorama_50D7E649_5C9E_8977_41A8_64F811436E49","class":"AdjacentPanorama","yaw":-108.65,"distance":100,"backwardYaw":150.66,"select":"this.overlay_51589FEC_5CA2_970D_41D4_CA639D4D0856.get('areas').forEach(function(a){ a.trigger('click') })"}],"thumbnailUrl":"media/panorama_567671AA_5C9F_8B35_41D2_734A9FF1CC03_t.webp","overlays":["this.overlay_51589FEC_5CA2_970D_41D4_CA639D4D0856","this.overlay_52E631E3_5CA3_8B34_41D1_1CFFF808A6A3","this.overlay_4D37A0B5_5CA2_891C_41D5_693017CEE81D"],"label":trans('panorama_567671AA_5C9F_8B35_41D2_734A9FF1CC03.label'),"hfov":360,"id":"panorama_567671AA_5C9F_8B35_41D2_734A9FF1CC03","class":"Panorama","data":{"label":"_MGT0636-HDR Panorama"},"hfovMax":130,"vfov":180,"frames":[{"cube":{"levels":[{"width":24576,"url":"media/panorama_567671AA_5C9F_8B35_41D2_734A9FF1CC03_0/{face}/0/{row}_{column}.webp","height":4096,"tags":"ondemand","class":"TiledImageResourceLevel","rowCount":4,"colCount":24},{"width":12288,"url":"media/panorama_567671AA_5C9F_8B35_41D2_734A9FF1CC03_0/{face}/1/{row}_{column}.webp","height":2048,"tags":"ondemand","class":"TiledImageResourceLevel","rowCount":2,"colCount":12},{"width":6144,"url":"media/panorama_567671AA_5C9F_8B35_41D2_734A9FF1CC03_0/{face}/2/{row}_{column}.webp","height":1024,"tags":["ondemand","preload"],"class":"TiledImageResourceLevel","rowCount":1,"colCount":6}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_567671AA_5C9F_8B35_41D2_734A9FF1CC03_t.webp","class":"CubicPanoramaFrame"}]},{"scrollBarColor":"#000000","left":0,"id":"Container_3F605AFD_2C16_94A9_415D_F6F45F03CEC5","backgroundColor":["#FDFDFD"],"data":{"name":"BARRA_INFERIOR"},"gap":10,"scrollBarMargin":2,"layout":"absolute","overflow":"scroll","propagateClick":false,"backgroundColorRatios":[0],"bottom":"0%","minWidth":20,"minHeight":10,"width":"100%","class":"Container","height":10},{"paddingLeft":0,"paddingTop":0,"paddingBottom":0,"iconURL":"skin/Button_3BF1FEF5_2CF3_6CB9_4196_F5A8E84B8178.png","paddingRight":0,"data":{"name":"Button Settings Fullscreen"},"pressedIconHeight":30,"id":"Button_3BF1FEF5_2CF3_6CB9_4196_F5A8E84B8178","backgroundColor":[],"horizontalAlign":"center","pressedIconURL":"skin/Button_3BF1FEF5_2CF3_6CB9_4196_F5A8E84B8178_pressed.png","iconWidth":30,"fontFamily":"Arial","rollOverBackgroundColor":[],"rollOverBackgroundOpacity":1,"mode":"toggle","propagateClick":false,"verticalAlign":"middle","backgroundColorRatios":[],"minHeight":1,"fontColor":"#FFFFFF","minWidth":1,"width":50,"class":"Button","rollOverBackgroundColorRatios":[],"fontSize":12,"borderColor":"#000000","height":"100%","iconHeight":30,"pressedIconWidth":30,"layout":"horizontal"},{"scrollBarColor":"#000000","backgroundImageUrl":"skin/Container_3D16D9EE_2C12_94AB_41AB_21D9F7FCD8BD.png","left":0,"id":"Container_3D16D9EE_2C12_94AB_41AB_21D9F7FCD8BD","data":{"name":"CT_ICON_LE"},"gap":10,"scrollBarMargin":2,"layout":"absolute","overflow":"scroll","propagateClick":false,"bottom":"0%","minWidth":20,"minHeight":20,"width":85,"class":"Container","height":60,"children":["this.IconButton_3F5151E9_2CED_94A9_41BF_194B62BC60F5"]},{"adjacentPanoramas":[{"data":{"overlayID":"overlay_51481FE8_5CA2_9734_4157_F88234A8DADC"},"panorama":"this.panorama_567671AA_5C9F_8B35_41D2_734A9FF1CC03","class":"AdjacentPanorama","yaw":150.66,"distance":100,"backwardYaw":-108.65,"select":"this.overlay_51481FE8_5CA2_9734_4157_F88234A8DADC.get('areas').forEach(function(a){ a.trigger('click') })"}],"thumbnailUrl":"media/panorama_50D7E649_5C9E_8977_41A8_64F811436E49_t.webp","overlays":["this.overlay_51481FE8_5CA2_9734_4157_F88234A8DADC","this.overlay_4C484130_5CA2_8B14_41C6_ED21CB87D0A0","this.overlay_4D87247F_5CA2_890B_419E_3707D0460874"],"label":trans('panorama_50D7E649_5C9E_8977_41A8_64F811436E49.label'),"hfov":360,"id":"panorama_50D7E649_5C9E_8977_41A8_64F811436E49","class":"Panorama","data":{"label":"_MGT0624-HDR Panorama"},"hfovMax":130,"vfov":180,"frames":[{"cube":{"levels":[{"width":18432,"url":"media/panorama_50D7E649_5C9E_8977_41A8_64F811436E49_0/{face}/0/{row}_{column}.webp","height":3072,"tags":"ondemand","class":"TiledImageResourceLevel","rowCount":3,"colCount":18},{"width":12288,"url":"media/panorama_50D7E649_5C9E_8977_41A8_64F811436E49_0/{face}/1/{row}_{column}.webp","height":2048,"tags":"ondemand","class":"TiledImageResourceLevel","rowCount":2,"colCount":12},{"width":6144,"url":"media/panorama_50D7E649_5C9E_8977_41A8_64F811436E49_0/{face}/2/{row}_{column}.webp","height":1024,"tags":["ondemand","preload"],"class":"TiledImageResourceLevel","rowCount":1,"colCount":6}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_50D7E649_5C9E_8977_41A8_64F811436E49_t.webp","class":"CubicPanoramaFrame"}]},{"iconURL":"skin/IconButton_48CDF4FA_5CA3_8915_41D1_0B304D167E51.png","data":{"name":"IconButton10559"},"horizontalAlign":"center","pressedIconURL":"skin/IconButton_48CDF4FA_5CA3_8915_41D1_0B304D167E51_pressed.png","backgroundColor":[],"id":"IconButton_48CDF4FA_5CA3_8915_41D1_0B304D167E51","transparencyActive":true,"propagateClick":false,"verticalAlign":"middle","backgroundColorRatios":[],"minHeight":1,"minWidth":1,"backgroundOpacity":0.3,"width":40,"class":"IconButton","height":40,"click":"this.openLink(this.translate('LinkBehaviour_4AB6BA93_5CE2_9914_41D0_2A659E74D148.source'), '_blank')","rollOverIconURL":"skin/IconButton_48CDF4FA_5CA3_8915_41D1_0B304D167E51_rollover.png"},{"data":{"label":"aROMA DOCE"},"class":"MediaAudio","autoplay":true,"audio":"this.audiores_4BE58E5F_5CEE_B90B_419E_BCA004B4410F","id":"audio_480DF553_5CE1_8B1B_4173_58F90C1D2C9D"},{"click":"this.openLink(this.translate('LinkBehaviour_4BA1BB8A_5CE1_9FF5_41AE_E8346C21C8E8.source'), '_blank')","left":32,"id":"Image_3D9EF928_2C15_7557_4171_42E70FB38AA1","data":{"name":"LOGO_IMG"},"horizontalAlign":"center","url":trans('Image_3D9EF928_2C15_7557_4171_42E70FB38AA1.url'),"verticalAlign":"middle","propagateClick":false,"top":5,"minHeight":1,"minWidth":1,"backgroundOpacity":0,"width":270,"class":"Image","height":90,"scaleMode":"fit_inside"},{"scrollBarColor":"#000000","data":{"name":"-button set"},"id":"Container_3BF1EEF5_2CF3_6CB9_41BE_1156E2B28723","backgroundColor":[],"right":10,"scrollBarMargin":2,"horizontalAlign":"center","layout":"horizontal","overflow":"hidden","propagateClick":false,"verticalAlign":"middle","backgroundColorRatios":[],"bottom":"0%","minWidth":1,"minHeight":1,"width":200,"class":"Container","height":50,"children":["this.Button_3BF05EF5_2CF3_6CB9_41B5_14A41DECB496","this.Button_3BF01EF5_2CF3_6CB9_41C5_2BB396B8FF82","this.Button_3BF1FEF5_2CF3_6CB9_4196_F5A8E84B8178"]},{"iconURL":"skin/IconButton_3EC0D325_2CF3_B55E_4191_975719C16724.png","data":{"name":"ICON_IMG_LD"},"id":"IconButton_3EC0D325_2CF3_B55E_4191_975719C16724","backgroundColor":[],"horizontalAlign":"center","right":12,"verticalAlign":"middle","transparencyActive":true,"propagateClick":false,"top":10,"backgroundColorRatios":[],"minHeight":1,"minWidth":1,"backgroundOpacity":0.3,"width":44,"class":"IconButton","height":44,"click":"var visibleFunc = function(component) { this.setComponentVisibility(component, true, 0, this.effect_4A7C241B_5CE2_890B_41C6_61BA1B83BFEF, 'showEffect', false)}.bind(this); var invisibleFunc = function(component) { this.setComponentVisibility(component, false, 0, this.effect_4A7C041C_5CE2_890D_41CB_4A91EADAE981, 'hideEffect', false)}.bind(this); if(!this.Container_483B09D5_5CA1_9B1F_41A8_9151AB800955.get('visible')){ visibleFunc(this.Container_483B09D5_5CA1_9B1F_41A8_9151AB800955) } else { invisibleFunc(this.Container_483B09D5_5CA1_9B1F_41A8_9151AB800955) }"},{"iconURL":"skin/IconButton_48919569_5CA2_8B37_41C9_1D27D94873F2.png","data":{"name":"IconButton9978"},"horizontalAlign":"center","pressedIconURL":"skin/IconButton_48919569_5CA2_8B37_41C9_1D27D94873F2_pressed.png","backgroundColor":[],"id":"IconButton_48919569_5CA2_8B37_41C9_1D27D94873F2","transparencyActive":true,"propagateClick":false,"verticalAlign":"middle","backgroundColorRatios":[],"minHeight":1,"minWidth":1,"backgroundOpacity":0.3,"width":40,"class":"IconButton","height":40,"click":"this.openLink(this.translate('LinkBehaviour_4B45FBC0_5CE7_9F75_41D1_5A0960FCE76D.source'), '_blank')","rollOverIconURL":"skin/IconButton_48919569_5CA2_8B37_41C9_1D27D94873F2_rollover.png"},{"adjacentPanoramas":[{"data":{"overlayID":"overlay_52ED81E4_5CA3_8B3C_41B1_2A1EE0255ABE"},"panorama":"this.panorama_567671AA_5C9F_8B35_41D2_734A9FF1CC03","class":"AdjacentPanorama","yaw":10.63,"distance":100,"backwardYaw":179.99,"select":"this.overlay_52ED81E4_5CA3_8B3C_41B1_2A1EE0255ABE.get('areas').forEach(function(a){ a.trigger('click') })"}],"thumbnailUrl":"media/panorama_5679FD48_5C9F_9B75_41B0_A1034AAA0F8D_t.webp","overlays":["this.overlay_52ED81E4_5CA3_8B3C_41B1_2A1EE0255ABE","this.overlay_4CFCDD2D_5CA1_9B0F_417F_5A5AFBEDA952"],"label":trans('panorama_5679FD48_5C9F_9B75_41B0_A1034AAA0F8D.label'),"hfov":360,"id":"panorama_5679FD48_5C9F_9B75_41B0_A1034AAA0F8D","class":"Panorama","data":{"label":"_MGT0651-HDR Panorama"},"hfovMax":130,"vfov":180,"frames":[{"cube":{"levels":[{"width":18432,"url":"media/panorama_5679FD48_5C9F_9B75_41B0_A1034AAA0F8D_0/{face}/0/{row}_{column}.webp","height":3072,"tags":"ondemand","class":"TiledImageResourceLevel","rowCount":3,"colCount":18},{"width":12288,"url":"media/panorama_5679FD48_5C9F_9B75_41B0_A1034AAA0F8D_0/{face}/1/{row}_{column}.webp","height":2048,"tags":"ondemand","class":"TiledImageResourceLevel","rowCount":2,"colCount":12},{"width":6144,"url":"media/panorama_5679FD48_5C9F_9B75_41B0_A1034AAA0F8D_0/{face}/2/{row}_{column}.webp","height":1024,"tags":["ondemand","preload"],"class":"TiledImageResourceLevel","rowCount":1,"colCount":6}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_5679FD48_5C9F_9B75_41B0_A1034AAA0F8D_t.webp","class":"CubicPanoramaFrame"}]},{"viewerArea":"this.MainViewer","class":"PanoramaPlayer","arrowKeysAction":"translate","aaEnabled":true,"touchControlMode":"drag_rotation","displayPlaybackBar":true,"id":"MainViewerPanoramaPlayer","mouseControlMode":"drag_rotation"},{"scrollBarColor":"#000000","backgroundImageUrl":"skin/Container_3D93FCF6_2C1D_ECBB_41C0_C56A1C446F6E.png","left":0,"id":"Container_3D93FCF6_2C1D_ECBB_41C0_C56A1C446F6E","data":{"name":"CT_LOGO_PNG"},"gap":10,"scrollBarMargin":2,"layout":"absolute","overflow":"scroll","propagateClick":false,"top":0,"minHeight":20,"minWidth":20,"width":800,"class":"Container","height":100,"children":["this.Image_3D9EF928_2C15_7557_4171_42E70FB38AA1"]},{"paddingLeft":0,"paddingTop":0,"paddingBottom":0,"iconURL":"skin/Button_3BF05EF5_2CF3_6CB9_41B5_14A41DECB496.png","paddingRight":0,"data":{"name":"Button settings VR"},"id":"Button_3BF05EF5_2CF3_6CB9_41B5_14A41DECB496","backgroundColor":[],"horizontalAlign":"center","pressedIconURL":"skin/Button_3BF05EF5_2CF3_6CB9_41B5_14A41DECB496_rollover.png","iconWidth":30,"fontFamily":"Arial","rollOverBackgroundColor":["#CE6700"],"rollOverBackgroundOpacity":0,"mode":"toggle","propagateClick":false,"verticalAlign":"middle","backgroundColorRatios":[],"minHeight":1,"fontColor":"#FFFFFF","minWidth":1,"width":50,"class":"Button","rollOverBackgroundColorRatios":[0],"fontSize":12,"borderColor":"#000000","height":"100%","iconHeight":30,"rollOverIconURL":"skin/Button_3BF05EF5_2CF3_6CB9_41B5_14A41DECB496_rollover.png","layout":"horizontal"},{"class":"SlideInEffect","duration":2000,"id":"effect_4A7C241B_5CE2_890B_41C6_61BA1B83BFEF","from":"right"},{"firstTransitionDuration":0,"subtitlesFontFamily":"Arial","toolTipPaddingRight":6,"subtitlesTop":0,"subtitlesTextShadowVerticalLength":1,"playbackBarProgressBorderColor":"#000000","toolTipBackgroundColor":"#F6F6F6","data":{"name":"Main Viewer"},"playbackBarHeadShadow":true,"subtitlesBorderColor":"#FFFFFF","playbackBarHeadBackgroundColor":["#111111","#666666"],"surfaceReticleColor":"#FFFFFF","toolTipFontColor":"#606060","playbackBarHeadBorderRadius":0,"progressBorderColor":"#000000","subtitlesTextShadowColor":"#000000","playbackBarHeadBorderColor":"#000000","progressBarBackgroundColor":["#3399FF"],"playbackBarBottom":5,"toolTipPaddingLeft":6,"toolTipShadowColor":"#333138","playbackBarBorderSize":0,"toolTipTextShadowColor":"#000000","subtitlesBottom":50,"playbackBarBackgroundOpacity":1,"playbackBarBackgroundColor":["#FFFFFF"],"progressBackgroundColor":["#000000"],"subtitlesBackgroundColor":"#000000","subtitlesTextShadowHorizontalLength":1,"subtitlesGap":0,"playbackBarHeight":10,"progressBottom":10,"surfaceReticleSelectionColor":"#FFFFFF","progressHeight":2,"toolTipFontSize":"1.11vmin","toolTipBorderColor":"#767676","progressBarBorderRadius":2,"progressBorderSize":0,"playbackBarHeadWidth":6,"playbackBarBackgroundColorDirection":"vertical","playbackBarProgressBorderSize":0,"id":"MainViewer","playbackBarProgressBorderRadius":0,"playbackBarRight":0,"playbackBarProgressBackgroundColor":["#3399FF"],"subtitlesTextShadowOpacity":1,"progressBorderRadius":2,"progressBackgroundColorRatios":[0],"vrPointerSelectionColor":"#FF6600","doubleClickAction":"none","subtitlesFontSize":"3vmin","progressBarBorderSize":0,"progressRight":"33%","vrPointerColor":"#FFFFFF","propagateClick":false,"progressLeft":"33%","playbackBarHeadShadowOpacity":0.7,"toolTipPaddingTop":4,"minHeight":50,"progressOpacity":0.7,"toolTipFontFamily":"Arial","minWidth":100,"playbackBarProgressBackgroundColorRatios":[0],"playbackBarHeadShadowBlurRadius":3,"progressBarBackgroundColorDirection":"horizontal","playbackBarLeft":0,"subtitlesBackgroundOpacity":0.2,"subtitlesFontColor":"#FFFFFF","toolTipPaddingBottom":4,"progressBarBorderColor":"#000000","width":"100%","class":"ViewerArea","vrPointerSelectionTime":2000,"playbackBarHeadShadowColor":"#000000","playbackBarHeadHeight":15,"playbackBarBorderColor":"#FFFFFF","playbackBarHeadBackgroundColorRatios":[0,1],"height":"100%","progressBarBackgroundColorRatios":[0],"playbackBarBorderRadius":0,"playbackBarHeadBorderSize":0},{"to":"right","class":"SlideOutEffect","duration":2000,"id":"effect_4A7C041C_5CE2_890D_41CB_4A91EADAE981"},{"manualRotationSpeed":1200,"timeToIdle":15000,"class":"PanoramaCamera","initialPosition":{"pitch":-1.94,"class":"PanoramaCameraPosition","hfov":125,"yaw":90.73},"displayOriginPosition":{"pitch":-90,"stereographicFactor":1,"class":"RotationalCameraDisplayPosition","hfov":165,"yaw":90.73},"displayMovements":[{"class":"TargetRotationalCameraDisplayMovement","duration":1000},{"targetStereographicFactor":0,"class":"TargetRotationalCameraDisplayMovement","easing":"cubic_in_out","duration":5000,"targetPitch":-1.94,"targetHfov":125}],"enterPointingToHorizon":true,"idleSequence":"this.sequence_56606683_5C9F_89FB_41D3_F4DBEA6B8D82","id":"panorama_50D7E649_5C9E_8977_41A8_64F811436E49_camera","initialSequence":"this.sequence_56606683_5C9F_89FB_41D3_F4DBEA6B8D82"},{"scrollBarColor":"#000000","left":0,"id":"Container_3D2D60BE_2C1E_94AA_41AD_41B3254B0D91","backgroundColor":["#DAD5D1"],"data":{"name":"BARRA_SUPERIOR"},"gap":10,"scrollBarMargin":2,"layout":"absolute","overflow":"scroll","propagateClick":false,"top":0,"backgroundColorRatios":[0],"minHeight":20,"minWidth":20,"width":"100%","class":"Container","height":50,"children":["this.Container_3BF1EEF5_2CF3_6CB9_41BE_1156E2B28723"]},{"paddingLeft":0,"paddingTop":0,"paddingBottom":0,"iconURL":"skin/Button_3BF01EF5_2CF3_6CB9_41C5_2BB396B8FF82.png","paddingRight":0,"data":{"name":"Button Settings Mute"},"pressedIconHeight":30,"horizontalAlign":"center","pressedIconURL":"skin/Button_3BF01EF5_2CF3_6CB9_41C5_2BB396B8FF82_pressed.png","backgroundColor":[],"iconWidth":30,"fontFamily":"Arial","id":"Button_3BF01EF5_2CF3_6CB9_41C5_2BB396B8FF82","rollOverBackgroundColor":["#CE6700"],"rollOverBackgroundOpacity":0,"mode":"toggle","propagateClick":false,"verticalAlign":"middle","backgroundColorRatios":[],"minHeight":1,"fontColor":"#FFFFFF","minWidth":1,"backgroundOpacity":0,"width":50,"class":"Button","rollOverBackgroundColorRatios":[0],"fontSize":12,"borderColor":"#000000","height":"100%","iconHeight":30,"pressedIconWidth":30,"layout":"horizontal"},{"manualRotationSpeed":1200,"timeToIdle":15000,"class":"PanoramaCamera","initialPosition":{"pitch":0,"class":"PanoramaCameraPosition","hfov":125,"yaw":0},"enterPointingToHorizon":true,"idleSequence":"this.sequence_579C5685_5C9F_89FF_41D5_DD3C3272C1A2","id":"panorama_5679FD48_5C9F_9B75_41B0_A1034AAA0F8D_camera","initialSequence":"this.sequence_579C5685_5C9F_89FF_41D5_DD3C3272C1A2"},{"scrollBarColor":"#000000","data":{"name":"redes socaiis"},"id":"Container_483B09D5_5CA1_9B1F_41A8_9151AB800955","gap":20,"right":"5.07%","scrollBarMargin":2,"horizontalAlign":"right","layout":"horizontal","overflow":"scroll","propagateClick":false,"bottom":"0%","minWidth":20,"backgroundOpacity":0,"minHeight":20,"width":"94.931%","class":"Container","height":"6.836%","children":["this.IconButton_48919569_5CA2_8B37_41C9_1D27D94873F2","this.IconButton_48CDF4FA_5CA3_8915_41D1_0B304D167E51"],"visible":false},{"items":[{"camera":"this.panorama_50D7E649_5C9E_8977_41A8_64F811436E49_camera","class":"PanoramaPlayListItem","media":"this.panorama_50D7E649_5C9E_8977_41A8_64F811436E49","player":"this.MainViewerPanoramaPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)"},{"camera":"this.panorama_567671AA_5C9F_8B35_41D2_734A9FF1CC03_camera","class":"PanoramaPlayListItem","media":"this.panorama_567671AA_5C9F_8B35_41D2_734A9FF1CC03","player":"this.MainViewerPanoramaPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 2)"},{"camera":"this.panorama_5679FD48_5C9F_9B75_41B0_A1034AAA0F8D_camera","class":"PanoramaPlayListItem","media":"this.panorama_5679FD48_5C9F_9B75_41B0_A1034AAA0F8D","end":"this.trigger('tourEnded')","player":"this.MainViewerPanoramaPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 2, 0)"}],"class":"PlayList","id":"mainPlayList"},{"data":{"label":"aROMA DOCE"},"class":"MediaAudio","autoplay":true,"audio":"this.audiores_4D8B7363_5CA1_8F34_41D4_D8499AF2246A","id":"audio_4EABE246_5CAE_897C_41C3_5EEA693E4B40"},{"scrollBarColor":"#000000","left":0,"id":"Container_3F33791F_2CF5_956A_41C2_C15CD39AD92A","backgroundColor":["#DAD5D1"],"data":{"name":"BARRA_INFERIOR_MAIOR"},"gap":10,"scrollBarMargin":2,"layout":"absolute","overflow":"scroll","propagateClick":false,"backgroundColorRatios":[0],"bottom":10,"minWidth":20,"minHeight":20,"width":"100%","class":"Container","height":30},{"movements":[{"yawSpeed":7.96,"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","easing":"cubic_in"},{"yawSpeed":7.96,"yawDelta":323,"class":"DistancePanoramaCameraMovement"},{"yawSpeed":7.96,"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","easing":"cubic_out"}],"class":"PanoramaCameraSequence","id":"sequence_579C0684_5C9F_89FD_41B4_524A8D4B4423"},{"data":{"label":"GoTo_mgt0624-hdrPanorama","hasPanoramaAction":true},"class":"HotspotPanoramaOverlay","items":[{"class":"HotspotPanoramaOverlayImage","yaw":-108.65,"vfov":8,"image":"this.AnimatedImageResource_45506CD5_5CA1_991F_41D6_B74DCDD867D3","distance":100,"scaleMode":"fit_inside","data":{"label":"GoTo_mgt0624-hdrPanorama"},"hfov":8}],"maps":[],"areas":["this.HotspotPanoramaOverlayArea_5265BAE2_5CA2_9935_41B3_77FE1A80E9AF"],"useHandCursor":true,"enabledInCardboard":true,"id":"overlay_51589FEC_5CA2_970D_41D4_CA639D4D0856"},{"data":{"label":"GoTo_mgt0651-hdrPanorama","hasPanoramaAction":true},"class":"HotspotPanoramaOverlay","items":[{"class":"HotspotPanoramaOverlayImage","yaw":179.99,"vfov":8,"image":"this.AnimatedImageResource_45500CD5_5CA1_991F_41CE_3F7A6AE2B93F","distance":100,"scaleMode":"fit_inside","data":{"label":"GoTo_mgt0651-hdrPanorama"},"hfov":8}],"maps":[],"areas":["this.HotspotPanoramaOverlayArea_523331F8_5CA3_8B15_41A9_6E4B3B94A598"],"useHandCursor":true,"enabledInCardboard":true,"id":"overlay_52E631E3_5CA3_8B34_41D1_1CFFF808A6A3"},{"pitch":42.8,"bleachingDistance":0.08,"class":"LensFlarePanoramaOverlay","yaw":-11.4,"id":"overlay_4D37A0B5_5CA2_891C_41D5_693017CEE81D","bleaching":0.27},{"data":{"label":"GoTo_mgt0636-hdrPanorama","hasPanoramaAction":true},"class":"HotspotPanoramaOverlay","items":[{"class":"HotspotPanoramaOverlayImage","yaw":150.66,"vfov":8,"image":"this.AnimatedImageResource_4553FCD4_5CA1_991D_41CB_E18F5274D1A2","distance":100,"scaleMode":"fit_inside","data":{"label":"GoTo_mgt0636-hdrPanorama"},"hfov":8}],"maps":[],"areas":["this.HotspotPanoramaOverlayArea_52C2F012_5CA2_8915_41D2_A7697BEF06CF"],"useHandCursor":true,"enabledInCardboard":true,"id":"overlay_51481FE8_5CA2_9734_4157_F88234A8DADC"},{"pitch":28.65,"bleachingDistance":0.14,"class":"LensFlarePanoramaOverlay","yaw":-45.22,"id":"overlay_4C484130_5CA2_8B14_41C6_ED21CB87D0A0","bleaching":0.7},{"pitch":45.95,"bleachingDistance":0.09,"class":"LensFlarePanoramaOverlay","yaw":116.29,"id":"overlay_4D87247F_5CA2_890B_419E_3707D0460874","bleaching":0.39},{"mp3Url":trans('audiores_4BE58E5F_5CEE_B90B_419E_BCA004B4410F.mp3Url'),"class":"AudioResource","id":"audiores_4BE58E5F_5CEE_B90B_419E_BCA004B4410F"},{"data":{"label":"GoTo_mgt0636-hdrPanorama","hasPanoramaAction":true},"class":"HotspotPanoramaOverlay","items":[{"pitch":-0.7,"class":"HotspotPanoramaOverlayImage","yaw":10.63,"vfov":10.5,"image":"this.AnimatedImageResource_4550DCD5_5CA1_991F_41D3_1B0A18D08AE8","distance":100,"scaleMode":"fit_inside","data":{"label":"GoTo_mgt0636-hdrPanorama"},"hfov":10.5}],"maps":[],"areas":["this.HotspotPanoramaOverlayArea_4D3E1D0A_5CA1_98F5_41D6_CEA4ED765D66"],"useHandCursor":true,"enabledInCardboard":true,"id":"overlay_52ED81E4_5CA3_8B3C_41B1_2A1EE0255ABE"},{"pitch":62.73,"bleachingDistance":0.17,"class":"LensFlarePanoramaOverlay","yaw":-27.65,"id":"overlay_4CFCDD2D_5CA1_9B0F_417F_5A5AFBEDA952","bleaching":0.4},{"movements":[{"yawSpeed":7.96,"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","easing":"cubic_in"},{"yawSpeed":7.96,"yawDelta":323,"class":"DistancePanoramaCameraMovement"},{"yawSpeed":7.96,"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","easing":"cubic_out"}],"class":"PanoramaCameraSequence","id":"sequence_56606683_5C9F_89FB_41D3_F4DBEA6B8D82"},{"movements":[{"yawSpeed":7.96,"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","easing":"cubic_in"},{"yawSpeed":7.96,"yawDelta":323,"class":"DistancePanoramaCameraMovement"},{"yawSpeed":7.96,"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","easing":"cubic_out"}],"class":"PanoramaCameraSequence","id":"sequence_579C5685_5C9F_89FF_41D5_DD3C3272C1A2"},{"gain":0.19,"mp3Url":trans('audiores_4D8B7363_5CA1_8F34_41D4_D8499AF2246A.mp3Url'),"class":"AudioResource","id":"audiores_4D8B7363_5CA1_8F34_41D4_D8499AF2246A"},{"frameCount":24,"class":"AnimatedImageResource","frameDuration":41,"finalFrame":"first","rowCount":6,"levels":[{"width":800,"url":"media/res_4CDCB861_5CAE_B937_41C3_FAE37FF069FA_0.webp","height":1200,"class":"ImageResourceLevel"}],"id":"AnimatedImageResource_45506CD5_5CA1_991F_41D6_B74DCDD867D3","colCount":4},{"displayTooltipInTouchScreens":true,"class":"HotspotPanoramaOverlayArea","mapColor":"any","click":"this.setPlayListSelectedIndex(this.mainPlayList, 0)","id":"HotspotPanoramaOverlayArea_5265BAE2_5CA2_9935_41B3_77FE1A80E9AF"},{"frameCount":24,"class":"AnimatedImageResource","frameDuration":41,"finalFrame":"first","rowCount":6,"levels":[{"width":800,"url":"media/res_4CDCB861_5CAE_B937_41C3_FAE37FF069FA_0.webp","height":1200,"class":"ImageResourceLevel"}],"id":"AnimatedImageResource_45500CD5_5CA1_991F_41CE_3F7A6AE2B93F","colCount":4},{"displayTooltipInTouchScreens":true,"class":"HotspotPanoramaOverlayArea","mapColor":"any","click":"this.setPlayListSelectedIndex(this.mainPlayList, 2)","id":"HotspotPanoramaOverlayArea_523331F8_5CA3_8B15_41A9_6E4B3B94A598"},{"frameCount":24,"class":"AnimatedImageResource","frameDuration":41,"finalFrame":"first","rowCount":6,"levels":[{"width":800,"url":"media/res_4CDCB861_5CAE_B937_41C3_FAE37FF069FA_0.webp","height":1200,"class":"ImageResourceLevel"}],"id":"AnimatedImageResource_4553FCD4_5CA1_991D_41CB_E18F5274D1A2","colCount":4},{"displayTooltipInTouchScreens":true,"class":"HotspotPanoramaOverlayArea","mapColor":"any","click":"this.setPlayListSelectedIndex(this.mainPlayList, 1)","id":"HotspotPanoramaOverlayArea_52C2F012_5CA2_8915_41D2_A7697BEF06CF"},{"frameCount":24,"class":"AnimatedImageResource","frameDuration":41,"finalFrame":"first","rowCount":6,"levels":[{"width":800,"url":"media/res_4CDCB861_5CAE_B937_41C3_FAE37FF069FA_0.webp","height":1200,"class":"ImageResourceLevel"}],"id":"AnimatedImageResource_4550DCD5_5CA1_991F_41D3_1B0A18D08AE8","colCount":4},{"displayTooltipInTouchScreens":true,"class":"HotspotPanoramaOverlayArea","mapColor":"any","click":"this.setPlayListSelectedIndex(this.mainPlayList, 1)","id":"HotspotPanoramaOverlayArea_4D3E1D0A_5CA1_98F5_41D6_CEA4ED765D66"}],"data":{"locales":{"pt":"locale/pt.txt"},"displayTooltipInTouchScreens":true,"history":{},"initialScale":0.5,"textToSpeechConfig":{"pitch":1,"stopBackgroundAudio":false,"rate":1,"speechOnInfoWindow":false,"volume":1,"speechOnQuizQuestion":false,"speechOnTooltip":false},"name":"Player620","defaultLocale":"pt"},"id":"rootPlayer","backgroundColor":["#FFFFFF"],"start":"this.playAudioList([this.audio_480DF553_5CE1_8B1B_4173_58F90C1D2C9D], true); this.init(); if(!this.get('fullscreenAvailable')) { [this.Button_3BF05EF5_2CF3_6CB9_41B5_14A41DECB496,this.Button_3BF1FEF5_2CF3_6CB9_4196_F5A8E84B8178].forEach(function(component) { if(component.get('class') != 'ViewerArea') component.set('visible', false); }) }","gap":10,"scrollBarMargin":2,"left":589.8,"watermark":false,"layout":"absolute","propagateClick":false,"backgroundColorRatios":[0],"minHeight":0,"defaultMenu":["fullscreen","mute","rotation"],"minWidth":0,"width":"100%","class":"Player","height":"100%","buttonToggleMute":"this.Button_3BF01EF5_2CF3_6CB9_41C5_2BB396B8FF82","buttonToggleFullscreen":["this.Button_3BF05EF5_2CF3_6CB9_41B5_14A41DECB496","this.Button_3BF1FEF5_2CF3_6CB9_4196_F5A8E84B8178"],"scripts":{"getMediaWidth":TDV.Tour.Script.getMediaWidth,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"setMapLocation":TDV.Tour.Script.setMapLocation,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"openLink":TDV.Tour.Script.openLink,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"clone":TDV.Tour.Script.clone,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"resumePlayers":TDV.Tour.Script.resumePlayers,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"initQuiz":TDV.Tour.Script.initQuiz,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"setValue":TDV.Tour.Script.setValue,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"initAnalytics":TDV.Tour.Script.initAnalytics,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"getMediaByName":TDV.Tour.Script.getMediaByName,"getPixels":TDV.Tour.Script.getPixels,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"historyGoForward":TDV.Tour.Script.historyGoForward,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"getMainViewer":TDV.Tour.Script.getMainViewer,"historyGoBack":TDV.Tour.Script.historyGoBack,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"init":TDV.Tour.Script.init,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"getComponentByName":TDV.Tour.Script.getComponentByName,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"playAudioList":TDV.Tour.Script.playAudioList,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"mixObject":TDV.Tour.Script.mixObject,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"startMeasurement":TDV.Tour.Script.startMeasurement,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"quizShowScore":TDV.Tour.Script.quizShowScore,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"executeJS":TDV.Tour.Script.executeJS,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"quizStart":TDV.Tour.Script.quizStart,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"getKey":TDV.Tour.Script.getKey,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"quizFinish":TDV.Tour.Script.quizFinish,"existsKey":TDV.Tour.Script.existsKey,"createTween":TDV.Tour.Script.createTween,"registerKey":TDV.Tour.Script.registerKey,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"showWindow":TDV.Tour.Script.showWindow,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"unregisterKey":TDV.Tour.Script.unregisterKey,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"toggleVR":TDV.Tour.Script.toggleVR,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"downloadFile":TDV.Tour.Script.downloadFile,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"disableVR":TDV.Tour.Script.disableVR,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"getOverlays":TDV.Tour.Script.getOverlays,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"showPopupImage":TDV.Tour.Script.showPopupImage,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"textToSpeech":TDV.Tour.Script.textToSpeech,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"enableVR":TDV.Tour.Script.enableVR,"cloneBindings":TDV.Tour.Script.cloneBindings,"translate":TDV.Tour.Script.translate,"isPanorama":TDV.Tour.Script.isPanorama,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"shareSocial":TDV.Tour.Script.shareSocial,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"setLocale":TDV.Tour.Script.setLocale},"children":["this.MainViewer","this.Container_3D2D60BE_2C1E_94AA_41AD_41B3254B0D91","this.Container_3D93FCF6_2C1D_ECBB_41C0_C56A1C446F6E","this.Container_3F605AFD_2C16_94A9_415D_F6F45F03CEC5","this.Container_3F33791F_2CF5_956A_41C2_C15CD39AD92A","this.Container_3D16D9EE_2C12_94AB_41AB_21D9F7FCD8BD","this.Container_3E22F5E6_2CEE_9CDB_41B3_3F807005E476","this.Container_483B09D5_5CA1_9B1F_41A8_9151AB800955"]};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['createQuizConfig'] = function () {
    var ad = {};
    this['get']('data')['translateObjs'] = translateObjs;
    return ad;
};
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2024.0.16.js.map
})();
//Generated with v2024.0.16, Sat Oct 5 2024