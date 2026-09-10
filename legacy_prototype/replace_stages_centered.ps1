$content = Get-Content -Path "roadmap.html" -Raw

$replacement = @"
      <!-- STAGES -->
      <div class="roadmap-timeline max-w-[600px] mx-auto py-8 flex flex-col items-center">

        <!-- Stage 1 — Done -->
        <div class="roadmap-stage w-full relative z-10 pt-6" data-stage="1">
          <!-- Top Center Icon -->
          <div class="absolute top-0 left-1/2 -ml-6 flex items-center justify-center w-12 h-12 rounded-full border-4 border-[#FBFCFE] bg-[#E8F8EE] shadow-sm z-20">
            <svg class="w-6 h-6 text-[#12A150]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
          </div>
          
          <div class="bg-white border border-[#EEF1F7] rounded-xl pt-8 pb-4 px-5 shadow-sm hover:shadow-md transition-shadow cursor-pointer w-full text-center relative">
            <p class="text-[12px] font-semibold text-[#0B7038] mb-1">Done</p>
            <p class="text-[18px] font-bold text-[#0F1420] mb-2">Get comfortable with HTML and the browser</p>
            <p class="text-[13px] text-[#6B7689] leading-relaxed px-4">Structure, semantics and what the browser does with your markup. No frameworks yet.</p>
            <div class="flex items-center justify-center flex-wrap gap-2 mt-3 mb-2">
              <span class="text-[12px] text-[#9AA5BB]">4 resources</span>
              <span class="text-[12px] text-[#9AA5BB]">·</span>
              <span class="text-[12px] text-[#9AA5BB]">about 2 weeks</span>
            </div>
            
            <div class="stage-resources hidden mt-4 pt-4 space-y-2.5 text-left" style="border-top:1px solid #EEF1F7">
              <a href="resources.html" class="flex items-center gap-3 p-3 rounded-lg transition-colors hover:bg-[#EEF1F7]" style="background:#F5F7FB"><svg class="w-4 h-4 shrink-0 text-[#3B62F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg><div class="min-w-0"><p class="text-[13px] font-medium text-[#0F1420] truncate">HTML basics — tags, attributes, nesting</p><p class="text-[12px] text-[#9AA5BB]">5 min read</p></div></a>
              <a href="resources.html" class="flex items-center gap-3 p-3 rounded-lg transition-colors hover:bg-[#EEF1F7]" style="background:#F5F7FB"><svg class="w-4 h-4 shrink-0 text-[#3B62F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg><div class="min-w-0"><p class="text-[13px] font-medium text-[#0F1420] truncate">The browser rendering pipeline</p><p class="text-[12px] text-[#9AA5BB]">6 min read</p></div></a>
            </div>
            
            <div class="mt-2 flex justify-center">
              <svg class="w-5 h-5 stage-chevron transition-transform text-[#CBD3E1]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
            </div>
          </div>
        </div>

        <!-- Connecting Arrow -->
        <div class="flex flex-col items-center justify-center my-2 text-[#CBD3E1]">
           <div class="w-0.5 h-6 bg-[#CBD3E1]"></div>
           <svg class="w-5 h-5 -mt-1.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L10 14.586l5.293-5.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
        </div>

        <!-- Stage 2 — Done -->
        <div class="roadmap-stage w-full relative z-10 pt-6" data-stage="2">
          <!-- Top Center Icon -->
          <div class="absolute top-0 left-1/2 -ml-6 flex items-center justify-center w-12 h-12 rounded-full border-4 border-[#FBFCFE] bg-[#E8F8EE] shadow-sm z-20">
            <svg class="w-6 h-6 text-[#12A150]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
          </div>
          
          <div class="bg-white border border-[#EEF1F7] rounded-xl pt-8 pb-4 px-5 shadow-sm hover:shadow-md transition-shadow cursor-pointer w-full text-center relative">
            <p class="text-[12px] font-semibold text-[#0B7038] mb-1">Done</p>
            <p class="text-[18px] font-bold text-[#0F1420] mb-2">CSS layout without guessing</p>
            <p class="text-[13px] text-[#6B7689] leading-relaxed px-4">Flexbox and grid until you can build a page without trial and error.</p>
            <div class="flex items-center justify-center flex-wrap gap-2 mt-3 mb-2">
              <span class="text-[12px] text-[#9AA5BB]">5 resources</span>
              <span class="text-[12px] text-[#9AA5BB]">·</span>
              <span class="text-[12px] text-[#9AA5BB]">about 3 weeks</span>
            </div>
            
            <div class="stage-resources hidden mt-4 pt-4 space-y-2.5 text-left" style="border-top:1px solid #EEF1F7">
              <a href="resources.html" class="flex items-center gap-3 p-3 rounded-lg transition-colors hover:bg-[#EEF1F7]" style="background:#F5F7FB"><svg class="w-4 h-4 shrink-0 text-[#3B62F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg><div class="min-w-0"><p class="text-[13px] font-medium text-[#0F1420] truncate">Flexbox — the only layout model you need first</p><p class="text-[12px] text-[#9AA5BB]">8 min read</p></div></a>
            </div>
            
            <div class="mt-2 flex justify-center">
              <svg class="w-5 h-5 stage-chevron transition-transform text-[#CBD3E1]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
            </div>
          </div>
        </div>

        <!-- Connecting Arrow -->
        <div class="flex flex-col items-center justify-center my-2 text-[#CBD3E1]">
           <div class="w-0.5 h-6 bg-[#CBD3E1]"></div>
           <svg class="w-5 h-5 -mt-1.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L10 14.586l5.293-5.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
        </div>

        <!-- Stage 3 — Done -->
        <div class="roadmap-stage w-full relative z-10 pt-6" data-stage="3">
          <!-- Top Center Icon -->
          <div class="absolute top-0 left-1/2 -ml-6 flex items-center justify-center w-12 h-12 rounded-full border-4 border-[#FBFCFE] bg-[#E8F8EE] shadow-sm z-20">
            <svg class="w-6 h-6 text-[#12A150]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
          </div>
          
          <div class="bg-white border border-[#EEF1F7] rounded-xl pt-8 pb-4 px-5 shadow-sm hover:shadow-md transition-shadow cursor-pointer w-full text-center relative">
            <p class="text-[12px] font-semibold text-[#0B7038] mb-1">Done</p>
            <p class="text-[18px] font-bold text-[#0F1420] mb-2">JavaScript on its own</p>
            <p class="text-[13px] text-[#6B7689] leading-relaxed px-4">The language before the library — types, functions, the DOM and fetch.</p>
            <div class="flex items-center justify-center flex-wrap gap-2 mt-3 mb-2">
              <span class="text-[12px] text-[#9AA5BB]">6 resources</span>
              <span class="text-[12px] text-[#9AA5BB]">·</span>
              <span class="text-[12px] text-[#9AA5BB]">about 4 weeks</span>
            </div>
            
            <div class="stage-resources hidden mt-4 pt-4 space-y-2.5 text-left" style="border-top:1px solid #EEF1F7">
              <a href="resources.html" class="flex items-center gap-3 p-3 rounded-lg transition-colors hover:bg-[#EEF1F7]" style="background:#F5F7FB"><svg class="w-4 h-4 shrink-0 text-[#3B62F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg><div class="min-w-0"><p class="text-[13px] font-medium text-[#0F1420] truncate">JavaScript fundamentals — types, functions, scope</p><p class="text-[12px] text-[#9AA5BB]">12 min read</p></div></a>
            </div>
            
            <div class="mt-2 flex justify-center">
              <svg class="w-5 h-5 stage-chevron transition-transform text-[#CBD3E1]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
            </div>
          </div>
        </div>

        <!-- Connecting Arrow -->
        <div class="flex flex-col items-center justify-center my-2 text-[#3B62F6]">
           <div class="w-0.5 h-6 bg-[#3B62F6]"></div>
           <svg class="w-5 h-5 -mt-1.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L10 14.586l5.293-5.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
        </div>

        <!-- Stage 4 — Current -->
        <div id="stage-4" class="roadmap-stage current w-full relative z-10 pt-6" data-stage="4">
          <!-- Top Center Icon -->
          <div class="absolute top-0 left-1/2 -ml-6 flex items-center justify-center w-12 h-12 rounded-full border-4 border-[#FBFCFE] bg-[#3B62F6] shadow-md z-20 text-white font-bold text-lg">
            4
          </div>
          
          <div class="bg-white border-2 border-[#3B62F6] rounded-xl pt-9 pb-4 px-5 shadow-lg cursor-pointer w-full text-center relative overflow-hidden transform hover:-translate-y-1 transition-transform duration-200">
            <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#6087FB] to-[#3B62F6]"></div>
            
            <span class="inline-block px-3 py-1 text-[11px] font-bold tracking-wide uppercase bg-[#EFF4FF] text-[#3B62F6] rounded-full mb-3">You are here</span>
            <p class="text-[19px] font-bold text-[#0F1420] mb-2">Build and deploy a small project</p>
            <p class="text-[14px] text-[#4E586B] leading-relaxed px-4">One page, one API call, deployed on a free host with a link you can put on your resume.</p>
            <div class="flex items-center justify-center flex-wrap gap-2 mt-4 mb-2">
              <span class="text-[13px] font-semibold text-[#3B62F6]">4 resources</span>
              <span class="text-[12px] text-[#9AA5BB]">·</span>
              <span class="text-[13px] font-semibold text-[#3B62F6]">about 2 weeks</span>
              <span class="text-[12px] text-[#9AA5BB]">·</span>
              <span class="text-[13px] font-semibold text-[#3B62F6]">1 project</span>
            </div>
            
            <div class="stage-resources mt-6 pt-5 space-y-3 text-left" style="border-top:1px solid #DCE6FF">
              <div class="bg-[#F5F7FB] border border-[#EEF1F7] rounded-lg p-4">
                <p class="text-[14px] font-bold text-[#0F1420] mb-3">What you should be able to do after this stage</p>
                <ul class="space-y-2">
                  <li class="flex items-start gap-2"><svg class="w-4 h-4 mt-0.5 shrink-0 text-[#3B62F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg><span class="text-[13px] text-[#4E586B]">Fetch data from a public API and render it</span></li>
                  <li class="flex items-start gap-2"><svg class="w-4 h-4 mt-0.5 shrink-0 text-[#3B62F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg><span class="text-[13px] text-[#4E586B]">Handle a loading state and an error state</span></li>
                  <li class="flex items-start gap-2"><svg class="w-4 h-4 mt-0.5 shrink-0 text-[#3B62F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg><span class="text-[13px] text-[#4E586B]">Deploy to a free host and share a working link</span></li>
                </ul>
              </div>
              <a href="resources.html" class="flex items-center gap-3 p-3 rounded-lg transition-colors hover:bg-[#EEF1F7] bg-white border border-[#E2E7F0]"><svg class="w-4 h-4 shrink-0 text-[#3B62F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg><div class="min-w-0"><p class="text-[13px] font-semibold text-[#0F1420] truncate">Deploying a static site for free</p><p class="text-[12px] text-[#6B7689]">6 min read</p></div></a>
              <div class="flex items-center justify-center gap-3 mt-5 pt-2">
                <button class="btn-secondary px-5 py-2.5 text-[14px] bg-[#EEF1F7] text-[#333B4A]">Skip this stage</button>
                <button class="btn-primary px-5 py-2.5 text-[14px] shadow-sm">Mark stage complete</button>
              </div>
            </div>
            
            <div class="mt-4 flex justify-center">
              <svg class="w-6 h-6 stage-chevron rotate-180 transition-transform text-[#3B62F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
            </div>
          </div>
        </div>

        <!-- Connecting Arrow -->
        <div class="flex flex-col items-center justify-center my-2 text-[#CBD3E1]">
           <div class="w-0.5 h-6 bg-[#CBD3E1]"></div>
           <svg class="w-5 h-5 -mt-1.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L10 14.586l5.293-5.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
        </div>

        <!-- Stage 5 -->
        <div class="roadmap-stage w-full relative z-10 pt-6" data-stage="5">
          <!-- Top Center Icon -->
          <div class="absolute top-0 left-1/2 -ml-6 flex items-center justify-center w-12 h-12 rounded-full border-4 border-[#FBFCFE] bg-[#FFFFFF] shadow-sm z-20 border-[3px] border-[#E2E7F0] text-[15px] font-bold text-[#9AA5BB]">
            5
          </div>
          
          <div class="bg-white border border-[#EEF1F7] rounded-xl pt-8 pb-4 px-5 shadow-sm hover:shadow-md transition-shadow cursor-pointer w-full text-center relative opacity-80 hover:opacity-100">
            <p class="text-[12px] font-medium text-[#9AA5BB] mb-1">Not started</p>
            <p class="text-[18px] font-bold text-[#0F1420] mb-2">Pick up React properly</p>
            <p class="text-[13px] text-[#6B7689] leading-relaxed px-4">Components, state and the two hooks you will actually use every day.</p>
            <div class="flex items-center justify-center flex-wrap gap-2 mt-3 mb-2">
              <span class="text-[12px] text-[#9AA5BB]">5 resources</span>
              <span class="text-[12px] text-[#9AA5BB]">·</span>
              <span class="text-[12px] text-[#9AA5BB]">about 4 weeks</span>
            </div>
            
            <div class="mt-2 flex justify-center">
              <svg class="w-5 h-5 stage-chevron transition-transform text-[#CBD3E1]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
            </div>
          </div>
        </div>

        <!-- Connecting Arrow -->
        <div class="flex flex-col items-center justify-center my-2 text-[#CBD3E1]">
           <div class="w-0.5 h-6 bg-[#CBD3E1]"></div>
           <svg class="w-5 h-5 -mt-1.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L10 14.586l5.293-5.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
        </div>

        <!-- Stage 6 -->
        <div class="roadmap-stage w-full relative z-10 pt-6" data-stage="6">
          <!-- Top Center Icon -->
          <div class="absolute top-0 left-1/2 -ml-6 flex items-center justify-center w-12 h-12 rounded-full border-4 border-[#FBFCFE] bg-[#FFFFFF] shadow-sm z-20 border-[3px] border-[#E2E7F0] text-[15px] font-bold text-[#9AA5BB]">
            6
          </div>
          
          <div class="bg-white border border-[#EEF1F7] rounded-xl pt-8 pb-4 px-5 shadow-sm hover:shadow-md transition-shadow cursor-pointer w-full text-center relative opacity-80 hover:opacity-100">
            <p class="text-[12px] font-medium text-[#9AA5BB] mb-1">Not started</p>
            <p class="text-[18px] font-bold text-[#0F1420] mb-2">Version control and working with others</p>
            <p class="text-[13px] text-[#6B7689] leading-relaxed px-4">Branches, pull requests and reading someone else's code.</p>
            <div class="flex items-center justify-center flex-wrap gap-2 mt-3 mb-2">
              <span class="text-[12px] text-[#9AA5BB]">3 resources</span>
              <span class="text-[12px] text-[#9AA5BB]">·</span>
              <span class="text-[12px] text-[#9AA5BB]">about 1 week</span>
            </div>
            
            <div class="mt-2 flex justify-center">
              <svg class="w-5 h-5 stage-chevron transition-transform text-[#CBD3E1]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
            </div>
          </div>
        </div>

        <!-- Connecting Arrow -->
        <div class="flex flex-col items-center justify-center my-2 text-[#CBD3E1]">
           <div class="w-0.5 h-6 bg-[#CBD3E1]"></div>
           <svg class="w-5 h-5 -mt-1.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L10 14.586l5.293-5.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
        </div>

        <!-- Stage 7 -->
        <div class="roadmap-stage w-full relative z-10 pt-6" data-stage="7">
          <!-- Top Center Icon -->
          <div class="absolute top-0 left-1/2 -ml-6 flex items-center justify-center w-12 h-12 rounded-full border-4 border-[#FBFCFE] bg-[#FFFFFF] shadow-sm z-20 border-[3px] border-[#E2E7F0] text-[15px] font-bold text-[#9AA5BB]">
            7
          </div>
          
          <div class="bg-white border border-[#EEF1F7] rounded-xl pt-8 pb-4 px-5 shadow-sm hover:shadow-md transition-shadow cursor-pointer w-full text-center relative opacity-80 hover:opacity-100">
            <p class="text-[12px] font-medium text-[#9AA5BB] mb-1">Not started</p>
            <p class="text-[18px] font-bold text-[#0F1420] mb-2">Prepare your resume and portfolio</p>
            <p class="text-[13px] text-[#6B7689] leading-relaxed px-4">Two projects written up plainly, plus the one-page resume.</p>
            <div class="flex items-center justify-center flex-wrap gap-2 mt-3 mb-2">
              <span class="text-[12px] text-[#9AA5BB]">3 resources</span>
              <span class="text-[12px] text-[#9AA5BB]">·</span>
              <span class="text-[12px] text-[#9AA5BB]">about 1 week</span>
            </div>
            
            <div class="mt-2 flex justify-center">
              <svg class="w-5 h-5 stage-chevron transition-transform text-[#CBD3E1]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
            </div>
          </div>
        </div>

        <!-- Connecting Arrow -->
        <div class="flex flex-col items-center justify-center my-2 text-[#CBD3E1]">
           <div class="w-0.5 h-6 bg-[#CBD3E1]"></div>
           <svg class="w-5 h-5 -mt-1.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L10 14.586l5.293-5.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
        </div>

        <!-- Stage 8 -->
        <div class="roadmap-stage w-full relative z-10 pt-6" data-stage="8">
          <!-- Top Center Icon -->
          <div class="absolute top-0 left-1/2 -ml-6 flex items-center justify-center w-12 h-12 rounded-full border-4 border-[#FBFCFE] bg-[#FFFFFF] shadow-sm z-20 border-[3px] border-[#E2E7F0] text-[15px] font-bold text-[#9AA5BB]">
            8
          </div>
          
          <div class="bg-white border border-[#EEF1F7] rounded-xl pt-8 pb-4 px-5 shadow-sm hover:shadow-md transition-shadow cursor-pointer w-full text-center relative opacity-80 hover:opacity-100">
            <p class="text-[12px] font-medium text-[#9AA5BB] mb-1">Not started</p>
            <p class="text-[18px] font-bold text-[#0F1420] mb-2">Interview practice</p>
            <p class="text-[13px] text-[#6B7689] leading-relaxed px-4">The twelve questions, the component round, and talking about your work.</p>
            <div class="flex items-center justify-center flex-wrap gap-2 mt-3 mb-2">
              <span class="text-[12px] text-[#9AA5BB]">5 resources</span>
              <span class="text-[12px] text-[#9AA5BB]">·</span>
              <span class="text-[12px] text-[#9AA5BB]">about 2 weeks</span>
            </div>
            
            <div class="mt-2 flex justify-center">
              <svg class="w-5 h-5 stage-chevron transition-transform text-[#CBD3E1]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
            </div>
          </div>
        </div>

      </div>
"@

$content -replace "(?s)      <!-- STAGES -->.*?      <!-- Right Sidebar Content", "$replacement`r`n`r`n      <!-- Right Sidebar Content" | Set-Content -Path "roadmap.html"
