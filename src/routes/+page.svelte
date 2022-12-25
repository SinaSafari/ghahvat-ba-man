<script>
	import Header from './Header.svelte';
	import Hero from './Hero.svelte';
	import Footer from './Footer.svelte';
	import Benefits from './Benefits.svelte';
	import FeatureA from './FeatureA.svelte';
	import FeatureB from './FeatureB.svelte';
	import Testimonial from './Testimonial.svelte';
	import Cta from './CTA.svelte';
	export const prerender = true;
</script>

<svelte:head>
	<title>قهوه ت با من</title>
	<meta name="description" content="" />
	<link rel="canonical" href="https://ghahvatbaman.ir" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<!-- SEO -->

	<meta property="og:type" content="website" />
	<meta property="og:title" content="Basic App Landing Page" />
	<meta
		property="og:description"
		content="Save time and get to market faster with this free fully responsive single page html template built with TailwindCSS."
	/>
	<meta property="og:image" content="LINK TO THE IMAGE FILE" />
	<meta property="og:url" content="https://ghahvatbaman.ir" />
	<meta property="og:site_name" content="Basic App Landing Page" />
	<meta name="twitter:title" content="TITLE OF POST OR PAGE" />
	<meta
		name="twitter:description"
		content="Save time and get to market faster with this free fully responsive single page html template built with TailwindCSS."
	/>
	<meta name="twitter:image" content="LINK TO IMAGE" />
	<meta name="twitter:site" content="@britzdm" />
	<meta name="twitter:creator" content="@britzdm" />
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
