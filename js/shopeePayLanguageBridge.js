/**
 * ShopeePayLanguage Bridge - 确保语言系统正确工作
 * 这个脚本解决了 sharedLanguage.js 和 shopeePayLanguage.js 之间的兼容性问题
 */

(function() {
    console.log("Language bridge initializing...");
    
    // 创建一个函数来强制应用翻译
    function forceApplyTranslations() {
        console.log("Force applying translations");
        
        // 确保全局变量正确设置
        if (typeof window.LANGUAGE === 'undefined') {
            console.warn("LANGUAGE object missing, creating it");
            window.LANGUAGE = {
                ENGLISH: 'en',
                THAI: 'th'
            };
        }
        
        // 确保 currentLanguage 正确设置
        const savedLanguage = localStorage.getItem('selectedLanguage') || 'en';
        console.log("Bridge found savedLanguage:", savedLanguage);
        
        if (!window.currentLanguage) {
            console.warn("currentLanguage missing, setting it to", savedLanguage);
            window.currentLanguage = savedLanguage;
        }
        
        // 确保 translations 对象存在
        if (!window.translations) {
            console.warn("translations object missing, creating it");
            window.translations = {};
        }
        
        // 确保 shopeePayTranslations 被合并到 translations
        if (window.shopeePayTranslations) {
            console.log("Merging shopeePayTranslations into global translations");
            Object.keys(window.shopeePayTranslations).forEach(key => {
                window.translations[key] = window.shopeePayTranslations[key];
            });
        }
        
        // 创建并重定义核心函数，确保它们能正常工作
        if (typeof window.getTranslation !== 'function') {
            console.warn("getTranslation function missing, creating it");
            window.getTranslation = function(key) {
                if (window.translations[key] && window.translations[key][window.currentLanguage]) {
                    return window.translations[key][window.currentLanguage];
                }
                console.warn(`Translation missing for key: ${key} in language: ${window.currentLanguage}`);
                return key;
            };
        }
        
        if (typeof window.setLanguage !== 'function') {
            console.warn("setLanguage function missing, creating it");
            window.setLanguage = function(lang) {
                console.log("Setting language to:", lang);
                if (lang === 'en' || lang === 'th') {
                    window.currentLanguage = lang;
                    localStorage.setItem('selectedLanguage', lang);
                    window.updatePageLanguage();
                    return true;
                }
                return false;
            };
        }
        
        if (typeof window.getCurrentLanguage !== 'function') {
            console.warn("getCurrentLanguage function missing, creating it");
            window.getCurrentLanguage = function() {
                return window.currentLanguage;
            };
        }
        
        if (typeof window.updatePageLanguage !== 'function') {
            console.warn("updatePageLanguage function missing, creating it");
            window.updatePageLanguage = function() {
                console.log("Updating page language to:", window.currentLanguage);
                // Update all elements with data-lang attribute
                const elements = document.querySelectorAll('[data-lang]');
                console.log("Found", elements.length, "translatable elements");
                elements.forEach(element => {
                    const key = element.getAttribute('data-lang');
                    if (key) {
                        const translation = window.getTranslation(key);
                        console.log(`Updating element ${key}:`, translation);
                        if (translation) {
                            element.textContent = translation;
                        }
                    }
                });
                
                // Update HTML lang attribute
                document.documentElement.lang = window.currentLanguage;
                
                // 更新语言切换器UI
                document.querySelectorAll('.lang-btn').forEach(btn => {
                    btn.classList.remove('active');
                });
                
                const activeBtn = document.querySelector(window.currentLanguage === 'en' ? '.lang-btn-en' : '.lang-btn-th');
                if (activeBtn) {
                    activeBtn.classList.add('active');
                }
            };
        }
        
        // 实际应用翻译
        if (typeof window.updatePageLanguage === 'function') {
            window.updatePageLanguage();
        }
    }
    
    // DOM加载后执行
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', forceApplyTranslations);
    } else {
        forceApplyTranslations();
    }
    
    // 页面完全加载后再执行一次
    window.addEventListener('load', function() {
        console.log("Window loaded - forcing final language update");
        setTimeout(forceApplyTranslations, 100);
    });
})(); 