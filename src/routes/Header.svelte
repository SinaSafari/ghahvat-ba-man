<header
	class="p-4 lg:py-2 lg:px-0 container mx-auto grid lg:flex lg:justify-between grid-cols-2 text-slate-700"
>
	<nav class="flex items-center">
		<img class="w-12 ml-16 rounded" src="/icon.png" alt="logo" />

		<ul class="lg:flex hidden">
			<li class="mr-8">
				<a class="font-medium hover:text-slate-900" href="#">خانه</a>
			</li>
			<li class="mr-8">
				<a class="font-medium hover:text-slate-900" href="#">تماس با ما</a>
			</li>
		</ul>
	</nav>
	<div class="hidden lg:block">
		<button class="mx-1 hover:underline p-4">ورود</button>
		<button
			class="px-4 py-3 bg-yellow-400 hover:bg-yellow-500 hover:cursor-pointer text-white font-medium rounded mx-1"
		>
			نسخه پیش نمایش
		</button>
	</div>

	<!-- mobile menu button -->
	<button
		type="button"
		class="lg:hidden justify-self-end inline-flex items-center justify-center rounded-md bg-gray-50 p-2 hover:bg-gray-400 hover:text-white focus:outline-none"
		aria-controls="mobile-menu"
		aria-expanded="false"
	>
		<button
			class="px-4 py-3 bg-yellow-400 hover:bg-yellow-500 hover:cursor-pointer text-white font-medium rounded mx-1"
		>
			نسخه پیش نمایش
		</button>
	</button>
	<!-- mobile menu -->
	<div id="mobile-menu" class="col-span-2 bg-slate-50 p-2 mt-4 rounded shadow-lg hidden lg:hidden">
		<ul class="w-full py-2">
			<li
				class="bg-slate-900 text-white hover:bg-slate-400 focus:bg-slate-400 hover:text-white focus:text-white p-2 rounded"
			>
				<a class="font-medium hover:text-slate-900" href="#">Demos</a>
			</li>
			<li
				class="hover:bg-slate-400 focus:bg-slate-400 hover:text-white focus:text-white p-2 rounded"
			>
				<a class="font-medium hover:text-slate-900" href="#">About</a>
			</li>
			<li
				class="hover:bg-slate-400 focus:bg-slate-400 hover:text-white focus:text-white p-2 rounded"
			>
				<a class="font-medium hover:text-slate-900" href="#">Blog</a>
			</li>
			<li
				class="hover:bg-slate-400 focus:bg-slate-400 hover:text-white focus:text-white p-2 rounded"
			>
				<a class="font-medium hover:text-slate-900" href="#">Pages</a>
			</li>
			<li
				class="hover:bg-slate-400 focus:bg-slate-400 hover:text-white focus:text-white p-2 rounded"
			>
				<a class="font-medium hover:text-slate-900" href="#">Contact</a>
			</li>
		</ul>
		<div class="border-t border-gray-400 pt-4">
			<button
				class="block w-full text-center p-4 bg-slate-900 hover:bg-slate-700 hover:cursor-pointer text-white font-medium rounded mx-1"
			>
				Get Started For Free
			</button>
			<button class="block w-full text-center mx-1 hover:underline p-4"> Login </button>
		</div>
	</div>
</header>
