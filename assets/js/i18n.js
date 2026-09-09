/*
 * TimeTrace（时痕）发布页多语言：简体中文 / English / 日本語
 *
 * 用法：把要翻译的文本节点加上 data-i18n="键名"，
 * 由本文件在页面加载时按当前语言填进 innerHTML；
 * 右上角的 .tt-lang-btn 点击后切换并记忆选择（localStorage）。
 */
(function () {
	'use strict';

	var LS_KEY = 'tt-lang';
	var HTML_LANG = { zh: 'zh-Hans', en: 'en', ja: 'ja' };

	var STR = {
		zh: {
			title: '时痕 TimeTrace · 岁月中重要的刻痕',
			meta: '时痕 TimeTrace —— 极简、无广告的倒数日 · 纪念日应用。记录生命中的重要时刻，让每一枚时间的刻痕都清晰可见。Material 3 设计，支持深色模式与多语言。',
			kicker: '为岁月留下重要的刻痕',
			h1: '时痕<span class="tt-en">TimeTrace</span>',
			lead: '别再忍受复古的倒数日了——<strong>时痕（TimeTrace）</strong>是一款小巧又简洁的记录式应用：既为未来的约定倒数，也为过往的起点计数。<br/>把生命里值得铭记的每一刻，凝留成一张张清晰的卡片。',
			ctaCircle: '查看特性',
			posterTitle: '时痕 已经',
			posterDate: '自从 2026-4-27',
			featTitle: '主要特性',
			featIntro: '未来的约定、过去的起点，都可以收进一张张卡片里；这里只讲你最关心的几件事。',
			feat1: '记录卡片',
			feat2: '重点置顶',
			feat3: '沉浸详情',
			feat4: '实时预览',
			feat5: '明暗主题',
			feat6: '多语言',
			galleryTitle: '界面一览',
			galleryIntro: '主页卡片、置顶高亮与沉浸详情……更多细节，等你上手后发现。',
			aboutTitle: '关于时痕',
			aboutIntro: '一个由 KIPPU 个人开发，开源维护的移动端小项目，主打轻量简洁（MIT License）。',
			ab1: '- 首页的记录卡片会根据标题和天数的长短，自动呈现出三种不同的排版',
			ab2: '- 试着把最在意的一天<strong>钉到首页顶部</strong>吧，它会以更漂亮的样式常驻你眼前',
			ab3: '- 点开任意卡片，换上自定义背景，调整遮罩厚度，如此一来就是一张海报式的<strong>沉浸详情</strong>',
			ab4: '- 编辑时所见即所得，随时预览卡片与详情页的最终效果。',
			ab5: '- <strong>深色 / 浅色</strong>随心切换并跟随系统；<strong>简体中文、English、日本語</strong> 原生支持。',
			ab6: '- 无广告、不打扰；所有数据都保存在你的设备里，可一键打包成 ZIP，随时备份或迁移到新手机。',
			aboutQuote: '「我们都可以为岁月留下重要的刻痕。」',
			contactTitle: '保持联系',
			contactIntro: '在下面这些渠道找到我们（链接即将就位）。',
			linkTwitter: '推特',
			linkDiscord: 'Discord',
			linkGithub: 'GitHub',
			linkTelegram: 'Telegram',
			linkOutlook: 'Outlook',
			linkIssue: 'Issue',
			footer: '© KIPPU · 时痕 TimeTrace（MIT）· Design: <a href="https://html5up.net">HTML5 UP</a>'
		},

		en: {
			title: 'TimeTrace — leave lasting marks on time',
			meta: 'TimeTrace — a minimal, ad-free countdown & anniversary app. Record the important moments of life and keep every trace of time vivid. Material 3 design; dark mode and multi-language support built in.',
			kicker: 'Leave lasting marks on time',
			h1: 'TimeTrace',
			lead: 'Stop settling for clunky countdown apps. <strong>TimeTrace</strong> is a small, tidy way to keep the moments that matter — count down to what’s ahead, and keep counting what’s already passed.<br/>Each memory worth keeping becomes a clear, simple card.',
			ctaCircle: 'Features',
			posterTitle: 'TimeTrace Already',
			posterDate: 'Since 2026-4-27',
			featTitle: 'Core Features',
			featIntro: 'Plans ahead and memories behind — each one fits in a card. Here are the highlights you’ll care about.',
			feat1: 'Record Cards',
			feat2: 'Pin to Top',
			feat3: 'Immersive View',
			feat4: 'Live Preview',
			feat5: 'Light & Dark',
			feat6: 'Multi-language',
			galleryTitle: 'Screens',
			galleryIntro: 'Home cards, pinned highlights and immersive views… there’s more to find once you try it.',
			aboutTitle: 'About TimeTrace',
			aboutIntro: 'A small mobile project built and maintained by KIPPU — lightweight and clean, open source under the MIT License.',
			ab1: '- Cards on the home screen automatically fall into three layouts depending on how long the title or day count is.',
			ab2: '- Pin the day that matters most <strong>to the top of the home screen</strong> — it stays right there, in an even nicer style.',
			ab3: '- Open any card, swap in your own background and tune the mask — it becomes a poster-like <strong>immersive view</strong>.',
			ab4: '- What you edit is what you get — preview the card and detail page exactly as they’ll appear.',
			ab5: '- Switch freely between <strong>dark and light</strong>, or follow the system; <strong>Simplified Chinese, English, and Japanese</strong> built in.',
			ab6: '- No ads, no pestering; all data stays on your device and can be packed into a ZIP any time — back it up or move to a new phone.',
			aboutQuote: 'We can all leave meaningful traces on the passage of time.',
			contactTitle: 'Get in Touch',
			contactIntro: 'Find us on the channels below (links coming soon).',
			linkTwitter: 'Twitter',
			linkDiscord: 'Discord',
			linkGithub: 'GitHub',
			linkTelegram: 'Telegram',
			linkOutlook: 'Outlook',
			linkIssue: 'Issue',
			footer: '© KIPPU · TimeTrace (MIT) · Design: <a href="https://html5up.net">HTML5 UP</a>'
		},

		ja: {
			title: 'TimeTrace · 時間に大切な痕跡を刻む',
			meta: 'TimeTrace —— ミニマルで広告なしのカウントダウン・記念日アプリ。人生の大切な瞬間を記録し、時間の痕跡を鮮やかに残します。Material 3 デザイン、ダークモード＆多言語対応。',
			kicker: '時間に大切な痕跡を刻む',
			h1: 'TimeTrace',
			lead: '古臭いカウントダウンアプリに別れを告げて。<strong>TimeTrace</strong> は、未来の約束をカウントダウンし、過ぎ去った日々も数え続ける、小さくてすっきりした記録アプリ。<br/>心に残る瞬間を、一枚一枚のカードに刻んでいきます。',
			ctaCircle: '機能を見る',
			posterTitle: 'TimeTrace から',
			posterDate: '開始日 2026-4-27',
			featTitle: '主な機能',
			featIntro: '未来の予定も過去の始まりも、カードにひとつずつ。あなたが気になるポイントをまとめました。',
			feat1: '記録カード',
			feat2: 'トップに固定',
			feat3: '没入型ビュー',
			feat4: 'リアルタイムプレビュー',
			feat5: 'ライト／ダーク',
			feat6: '多言語',
			galleryTitle: '画面一覧',
			galleryIntro: 'ホームのカード、ピン留め、没入型ビュー……実際に触ってから見つかる細かい魅力も。',
			aboutTitle: 'TimeTrace について',
			aboutIntro: 'KIPPU が個人で開発・メンテナンスするモバイルの小さなプロジェクト。軽くてすっきり、MIT License でオープンソース。',
			ab1: '- ホームの記録カードは、タイトルや日数の長さに合わせて自動で3つのレイアウトに変化します',
			ab2: '- 一番気になる日を<strong>ホームの一番上に固定</strong>。より素敵なスタイルで毎日そばにいてくれます',
			ab3: '- カードを開いて背景を変え、マスクの濃さを調整すれば、ポスターのような<strong>没入型ビュー</strong>に',
			ab4: '- 編集画面は見たまま（WYSIWYG）。カードと詳細ページの最終的な見た目をいつでもプレビューできます。',
			ab5: '- <strong>ダーク／ライト</strong>を自由に切り替え、システム追従も可能。<strong>簡体字中国語・英語・日本語</strong>に標準対応。',
			ab6: '- 広告なし・邪魔なし。データはすべて端末内に保存され、いつでもワンタップで ZIP にまとめてバックアップ／機種変更できます。',
			aboutQuote: '誰もが時間に、大切な痕跡を残していける。',
			contactTitle: '連絡先',
			contactIntro: '以下のチャンネルで見つけられます（リンクは準備中）。',
			linkTwitter: 'Twitter',
			linkDiscord: 'Discord',
			linkGithub: 'GitHub',
			linkTelegram: 'Telegram',
			linkOutlook: 'Outlook',
			linkIssue: 'Issue',
			footer: '© KIPPU · TimeTrace（MIT）· Design: <a href="https://html5up.net">HTML5 UP</a>'
		}
	};

	function saved() {
		try {
			var v = localStorage.getItem(LS_KEY);
			return v && STR[v] ? v : null;
		} catch (e) { return null; }
	}

	function detect() {
		var s = saved();
		if (s) return s;
		var n = (navigator.language || 'zh').toLowerCase();
		if (n.indexOf('ja') === 0) return 'ja';
		if (n.indexOf('zh') === 0) return 'zh';
		return 'en';
	}

	function pick(lang, key) {
		return (STR[lang] && key in STR[lang]) ? STR[lang][key] : STR.zh[key];
	}

	function apply(lang, remember) {
		document.documentElement.setAttribute('lang', HTML_LANG[lang] || 'zh-Hans');

		var nodes = document.querySelectorAll('[data-i18n]');
		for (var i = 0; i < nodes.length; i++) {
			var k = nodes[i].getAttribute('data-i18n');
			if (k) nodes[i].innerHTML = pick(lang, k);
		}

		document.title = pick(lang, 'title');
		var meta = document.querySelector('meta[name="description"]');
		if (meta) meta.setAttribute('content', pick(lang, 'meta'));

		var btns = document.querySelectorAll('.tt-lang-btn');
		for (var j = 0; j < btns.length; j++) {
			var on = btns[j].getAttribute('data-lang') === lang;
			btns[j].classList.toggle('active', on);
			btns[j].setAttribute('aria-pressed', on ? 'true' : 'false');
		}

		if (remember) {
			try { localStorage.setItem(LS_KEY, lang); } catch (e) { /* 忽略隐私模式等写入失败 */ }
		}
	}

	function setOpen(box, open) {
		if (!box) return;
		box.classList.toggle('open', open);
		box.setAttribute('aria-expanded', open ? 'true' : 'false');
	}

	function init() {
		apply(detect(), false);
		setOpen(document.querySelector('.tt-lang'), false);

		document.addEventListener('click', function (e) {
			var t = e.target;
			var box = document.querySelector('.tt-lang');
			if (!box) return;
			var inside = t && t.closest ? t.closest('.tt-lang') : null;
			var btn = t && t.closest ? t.closest('.tt-lang-btn') : null;

			if (btn) {
				var l = btn.getAttribute('data-lang');
				if (!STR[l]) return;
				if (box.classList.contains('open')) {
					// 抽屉展开态：点选语言 → 应用并回收。
					apply(l, true);
					setOpen(box, false);
				} else {
					// 折叠态：点击当前语言 → 展开抽屉。
					setOpen(box, true);
				}
				return;
			}

			// 点抽屉内部空白或外部 → 收起。
			setOpen(box, false);
		});
	}

	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', init);
	} else {
		init();
	}
})();
