<script>
	import Header from './Header.svelte';
	import Hero from './Hero.svelte';
	import Footer from './Footer.svelte';
	import Benefits from './Benefits.svelte';
	import FeatureA from './FeatureA.svelte';
	import FeatureB from './FeatureB.svelte';
	import Cta from './CTA.svelte';
	export const prerender = true;
</script>

<svelte:head>
	<title>قهوه ت با من</title>
	<meta name="description" content="قهوه ت با من" />
	<link rel="canonical" href="https://ghahvatbaman.ir" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<!-- SEO -->

	<meta property="og:type" content="website" />
	<meta property="og:title" content="قهوه ت با من" />
	<meta
		property="og:description"
		content="Save time and get to market faster with this free fully responsive single page html template built with TailwindCSS."
	/>
	<meta property="og:image" content="https://ghahvatbaman.ir/icon.png" />
	<meta property="og:url" content="https://ghahvatbaman.ir" />
	<meta property="og:site_name" content="قهوه ت با من" />
	<meta name="twitter:title" content="قهوه ت با من" />
	<meta
		name="twitter:description"
		content="قهوه ت با من"
	/>
	<meta name="twitter:image" content="https://ghahvatbaman.ir/icon.png" />
	<meta name="twitter:site" content="@ghahvatbaman" />
	<meta name="twitter:creator" content="@ghahvatbaman" />
	<meta name="robots" content="index" />
	<!-- end SEO -->
</svelte:head>

<div class="text-slate-700 bg-slate-50">
	<Header />
	<Hero />
	<Benefits />
	<FeatureA />
	<FeatureB />
	<!-- <Testimonial /> -->
	<Cta />
	<Footer />
</div>
