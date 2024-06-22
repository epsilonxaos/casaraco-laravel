<link rel="apple-touch-icon" sizes="76x76" href="{{ asset('img/favicon/apple-touch-icon.png') }}">
<link rel="icon" type="image/png" sizes="32x32" href="{{ asset('img/favicon/favicon-32x32.png') }}">
<link rel="icon" type="image/png" sizes="16x16" href="{{ asset('img/favicon/favicon-16x16.png') }}">
<link rel="manifest" href="{{ asset('img/favicon/site.webmanifest') }}">
<link rel="mask-icon" href="{{ asset('img/favicon/safari-pinned-tab.svg') }}" color="#5bbad5">
<meta name="msapplication-TileColor" content="#da532c">
<meta name="theme-color" content="#ffffff">


<meta name="description"
    content="El inicio de una estancia inolvidable en Parras, Coahuila. Nuestro hotel boutique es m&aacute;s que s&oacute;lo un lugar de hospedaje, se trata de un espacio cuidadosamente dise&ntilde;ado por el renombrado arquitecto oaxaque&ntilde;o Aar&oacute;n Garc&iacute;a para que vivas una experiencia &uacute;nica." />
<meta name="author" content="{{ config('app.name', 'Casa Raco') }}" />
<meta property="og:type" content="es_MX" />
<meta property="og:locale" content="website" />
<meta property="og:site_name" content="{{ config('app.name', 'Casa Raco') }}" />
<meta property="og:title" content="{{ config('app.name', 'Casa Raco') }}" />
<meta property="og:url" content="{{ config('app.url') }}" />
<meta property="og:description"
    content="El inicio de una estancia inolvidable en Parras, Coahuila. Nuestro hotel boutique es m&aacute;s que s&oacute;lo un lugar de hospedaje, se trata de un espacio cuidadosamente dise&ntilde;ado por el renombrado arquitecto oaxaque&ntilde;o Aar&oacute;n Garc&iacute;a para que vivas una experiencia &uacute;nica." />
<meta property="og:image" content="{{ asset('img/fb.png') }}" />
<meta property="og:image:width" content="1080" />
<meta property="og:image:height" content="600" />

@env('production')
<!-- Meta Pixel Code -->
<script>
    ! function(f, b, e, v, n, t, s) {
        if (f.fbq) return;
        n = f.fbq = function() {
            n.callMethod ?
                n.callMethod.apply(n, arguments) : n.queue.push(arguments)
        };
        if (!f._fbq) f._fbq = n;
        n.push = n;
        n.loaded = !0;
        n.version = '2.0';
        n.queue = [];
        t = b.createElement(e);
        t.async = !0;
        t.src = v;
        s = b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t, s)
    }(window, document, 'script',
        'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '1113122856588462');
    fbq('track', 'PageView');
</script>
<noscript><img height="1" width="1" style="display:none"
        src="https://www.facebook.com/tr?id=1113122856588462&ev=PageView&noscript=1" /></noscript>
<!-- End Meta Pixel Code -->


<!-- Whistle Live Chat Plugin -->
<script type="text/javascript" async defer>
    (function() {
        window.WhistleLiveChat = {
            company: "314435",
            source: "https://plugins.whistle.cloudbeds.com"
        };
        var e = document.createElement("script");
        e.async = !0, e.type = "text/javascript", e.src = window.WhistleLiveChat.source +
            "/live-chat/initialize.js";
        var t = document.getElementsByTagName("script")[0];
        t.parentNode.insertBefore(e, t)
    }())
</script>
@endenv
