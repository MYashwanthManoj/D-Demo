$content = Get-Content -Path "roadmap.html" -Raw

$replacement = @"
      <!-- STAGES -->
      <div class="roadmap-timeline relative max-w-[900px] mx-auto py-12">
        <!-- Breathtaking glowing timeline spine -->
        <div class="absolute top-8 bottom-8 left-[39px] md:left-1/2 md:-ml-[2px] w-1 bg-gradient-to-b from-[#6087FB] via-[#3B62F6] to-[#12A150] rounded-full shadow-[0_0_15px_rgba(59,98,246,0.4)] z-0 opacity-80"></div>

        <!-- Stage 1 — Done (Left) -->
        <div class="roadmap-stage relative z-10 flex flex-col md:flex-row w-full mb-16" data-stage="1">
          <!-- Mobile icon -->
          <div class="md:hidden absolute left-[20px] top-4 flex items-center justify-center w-10 h-10 rounded-full border-2 border-[#12A150] bg-[#E8F8EE] shadow-[0_0_0_6px_#FBFCFE] z-10">
            <svg class="w-5 h-5 text-[#12A150]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
          </div>
          
          <!-- Left Card Area -->
          <div class="w-full md:w-1/2 flex justify-end md:pr-12 pl-[80px] md:pl-0 relative group">
            <!-- Horizontal Connector (Desktop) -->
            <div class="hidden md:block absolute top-6 right-0 w-12 h-[2px] bg-gradient-to-r from-transparent to-[#12A150] opacity-60"></div>
            
            <div class="max-w-[380px] w-full bg-white/95 backdrop-blur-sm border border-[#E8F8EE] rounded-xl p-6 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] transform hover:-translate-y-1.5 transition-all duration-300 cursor-pointer text-left relative z-10">
              <div class="flex items-start justify-between gap-4">
                <div class="min-w-0">
                  <p class="text-[12px] font-semibold text-[#0B7038] mb-1 uppercase tracking-wide">Done</p>
                  <p class="text-[17px] font-bold text-[#0F1420] mb-2 leading-tight">Get comfortable with HTML and the browser</p>
                  <p class="text-[13px] text-[#6B7689] leading-relaxed">Structure, semantics and what the browser does with your markup. No frameworks yet.</p>
                  <div class="flex items-center flex-wrap gap-2 mt-3"><span class="text-[12px] text-[#9AA5BB] font-medium">4 resources</span><span class="text-[12px] text-[#9AA5BB]">·</span><span class="text-[12px] text-[#9AA5BB] font-medium">about 2 weeks</span></div>
                </div>
                <svg class="w-5 h-5 shrink-0 stage-chevron transition-transform text-[#CBD3E1]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
              </div>
              <div class="stage-resources hidden mt-5 pt-4 space-y-2.5 border-t border-[#EEF1F7]">
                <a href="resources.html" class="flex items-center gap-3 p-3 rounded-lg transition-colors hover:bg-[#EEF1F7] bg-[#F5F7FB] border border-transparent hover:border-[#E2E7F0]"><svg class="w-4 h-4 shrink-0 text-[#3B62F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg><div class="min-w-0"><p class="text-[13px] font-medium text-[#0F1420] truncate">HTML basics — tags, attributes, nesting</p><p class="text-[12px] text-[#9AA5BB]">5 min read</p></div></a>
                <a href="resources.html" class="flex items-center gap-3 p-3 rounded-lg transition-colors hover:bg-[#EEF1F7] bg-[#F5F7FB] border border-transparent hover:border-[#E2E7F0]"><svg class="w-4 h-4 shrink-0 text-[#3B62F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg><div class="min-w-0"><p class="text-[13px] font-medium text-[#0F1420] truncate">The browser rendering pipeline</p><p class="text-[12px] text-[#9AA5BB]">6 min read</p></div></a>
              </div>
            </div>
          </div>
          
          <!-- Center icon -->
          <div class="hidden md:flex absolute left-1/2 top-6 -mt-6 -ml-6 items-center justify-center w-12 h-12 rounded-full border-[3px] border-[#FBFCFE] bg-[#E8F8EE] shadow-[0_0_0_6px_#FBFCFE,0_4px_10px_rgba(0,0,0,0.05)] z-20 transition-transform group-hover:scale-110">
            <svg class="w-6 h-6 text-[#12A150]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
          </div>
          <!-- Right Empty -->
          <div class="hidden md:block w-1/2 pl-12"></div>
        </div>

        <!-- Stage 2 — Done (Right) -->
        <div class="roadmap-stage relative z-10 flex flex-col md:flex-row w-full mb-16" data-stage="2">
          <!-- Mobile icon -->
          <div class="md:hidden absolute left-[20px] top-4 flex items-center justify-center w-10 h-10 rounded-full border-2 border-[#12A150] bg-[#E8F8EE] shadow-[0_0_0_6px_#FBFCFE] z-10">
            <svg class="w-5 h-5 text-[#12A150]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
          </div>
          
          <!-- Left Empty -->
          <div class="hidden md:block w-1/2 pr-12"></div>
          
          <!-- Center icon -->
          <div class="hidden md:flex absolute left-1/2 top-6 -mt-6 -ml-6 items-center justify-center w-12 h-12 rounded-full border-[3px] border-[#FBFCFE] bg-[#E8F8EE] shadow-[0_0_0_6px_#FBFCFE,0_4px_10px_rgba(0,0,0,0.05)] z-20 transition-transform group-hover:scale-110">
            <svg class="w-6 h-6 text-[#12A150]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
          </div>

          <!-- Right Card Area -->
          <div class="w-full md:w-1/2 flex justify-start md:pl-12 pl-[80px] md:pl-0 relative group">
            <!-- Horizontal Connector (Desktop) -->
            <div class="hidden md:block absolute top-6 left-0 w-12 h-[2px] bg-gradient-to-l from-transparent to-[#12A150] opacity-60"></div>
            
            <div class="max-w-[380px] w-full bg-white/95 backdrop-blur-sm border border-[#E8F8EE] rounded-xl p-6 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] transform hover:-translate-y-1.5 transition-all duration-300 cursor-pointer text-left relative z-10">
              <div class="flex items-start justify-between gap-4">
                <div class="min-w-0">
                  <p class="text-[12px] font-semibold text-[#0B7038] mb-1 uppercase tracking-wide">Done</p>
                  <p class="text-[17px] font-bold text-[#0F1420] mb-2 leading-tight">CSS layout without guessing</p>
                  <p class="text-[13px] text-[#6B7689] leading-relaxed">Flexbox and grid until you can build a page without trial and error.</p>
                  <div class="flex items-center flex-wrap gap-2 mt-3"><span class="text-[12px] text-[#9AA5BB] font-medium">5 resources</span><span class="text-[12px] text-[#9AA5BB]">·</span><span class="text-[12px] text-[#9AA5BB] font-medium">about 3 weeks</span></div>
                </div>
                <svg class="w-5 h-5 shrink-0 stage-chevron transition-transform text-[#CBD3E1]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
              </div>
              <div class="stage-resources hidden mt-5 pt-4 space-y-2.5 border-t border-[#EEF1F7]">
                <a href="resources.html" class="flex items-center gap-3 p-3 rounded-lg transition-colors hover:bg-[#EEF1F7] bg-[#F5F7FB] border border-transparent hover:border-[#E2E7F0]"><svg class="w-4 h-4 shrink-0 text-[#3B62F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg><div class="min-w-0"><p class="text-[13px] font-medium text-[#0F1420] truncate">Flexbox — the only layout model you need first</p><p class="text-[12px] text-[#9AA5BB]">8 min read</p></div></a>
              </div>
            </div>
          </div>
        </div>

        <!-- Stage 3 — Done (Left) -->
        <div class="roadmap-stage relative z-10 flex flex-col md:flex-row w-full mb-16" data-stage="3">
          <!-- Mobile icon -->
          <div class="md:hidden absolute left-[20px] top-4 flex items-center justify-center w-10 h-10 rounded-full border-2 border-[#12A150] bg-[#E8F8EE] shadow-[0_0_0_6px_#FBFCFE] z-10">
            <svg class="w-5 h-5 text-[#12A150]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
          </div>
          
          <!-- Left Card Area -->
          <div class="w-full md:w-1/2 flex justify-end md:pr-12 pl-[80px] md:pl-0 relative group">
            <!-- Horizontal Connector (Desktop) -->
            <div class="hidden md:block absolute top-6 right-0 w-12 h-[2px] bg-gradient-to-r from-transparent to-[#12A150] opacity-60"></div>
            
            <div class="max-w-[380px] w-full bg-white/95 backdrop-blur-sm border border-[#E8F8EE] rounded-xl p-6 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] transform hover:-translate-y-1.5 transition-all duration-300 cursor-pointer text-left relative z-10">
              <div class="flex items-start justify-between gap-4">
                <div class="min-w-0">
                  <p class="text-[12px] font-semibold text-[#0B7038] mb-1 uppercase tracking-wide">Done</p>
                  <p class="text-[17px] font-bold text-[#0F1420] mb-2 leading-tight">JavaScript on its own</p>
                  <p class="text-[13px] text-[#6B7689] leading-relaxed">The language before the library — types, functions, the DOM and fetch.</p>
                  <div class="flex items-center flex-wrap gap-2 mt-3"><span class="text-[12px] text-[#9AA5BB] font-medium">6 resources</span><span class="text-[12px] text-[#9AA5BB]">·</span><span class="text-[12px] text-[#9AA5BB] font-medium">about 4 weeks</span></div>
                </div>
                <svg class="w-5 h-5 shrink-0 stage-chevron transition-transform text-[#CBD3E1]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
              </div>
              <div class="stage-resources hidden mt-5 pt-4 space-y-2.5 border-t border-[#EEF1F7]">
                <a href="resources.html" class="flex items-center gap-3 p-3 rounded-lg transition-colors hover:bg-[#EEF1F7] bg-[#F5F7FB] border border-transparent hover:border-[#E2E7F0]"><svg class="w-4 h-4 shrink-0 text-[#3B62F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg><div class="min-w-0"><p class="text-[13px] font-medium text-[#0F1420] truncate">JavaScript fundamentals — types, functions, scope</p><p class="text-[12px] text-[#9AA5BB]">12 min read</p></div></a>
              </div>
            </div>
          </div>
          
          <!-- Center icon -->
          <div class="hidden md:flex absolute left-1/2 top-6 -mt-6 -ml-6 items-center justify-center w-12 h-12 rounded-full border-[3px] border-[#FBFCFE] bg-[#E8F8EE] shadow-[0_0_0_6px_#FBFCFE,0_4px_10px_rgba(0,0,0,0.05)] z-20 transition-transform group-hover:scale-110">
            <svg class="w-6 h-6 text-[#12A150]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
          </div>
          <!-- Right Empty -->
          <div class="hidden md:block w-1/2 pl-12"></div>
        </div>

        <!-- Stage 4 — Current (Right) -->
        <div id="stage-4" class="roadmap-stage current relative z-10 flex flex-col md:flex-row w-full mb-16" data-stage="4">
          <!-- Mobile icon -->
          <div class="md:hidden absolute left-[20px] top-4 flex items-center justify-center w-10 h-10 rounded-full border-2 border-[#EFF4FF] bg-[#3B62F6] shadow-[0_0_0_6px_#FBFCFE,0_0_15px_rgba(59,98,246,0.6)] z-10 text-white font-bold text-sm">
            4
          </div>
          
          <!-- Left Empty -->
          <div class="hidden md:block w-1/2 pr-12"></div>
          
          <!-- Center icon (Glowing) -->
          <div class="hidden md:flex absolute left-1/2 top-6 -mt-6 -ml-6 items-center justify-center w-12 h-12 rounded-full border-[3px] border-[#FBFCFE] bg-[#3B62F6] shadow-[0_0_0_6px_#FBFCFE,0_0_25px_rgba(59,98,246,0.8)] z-20 text-white font-bold text-lg animate-pulse">
            4
          </div>

          <!-- Right Card Area -->
          <div class="w-full md:w-1/2 flex justify-start md:pl-12 pl-[80px] md:pl-0 relative group">
            <!-- Horizontal Connector (Desktop) -->
            <div class="hidden md:block absolute top-6 left-0 w-12 h-[2px] bg-gradient-to-l from-transparent to-[#3B62F6]"></div>
            
            <div class="max-w-[380px] w-full bg-white/95 backdrop-blur-md border border-[#3B62F6] rounded-xl pt-8 pb-6 px-6 shadow-[0_12px_40px_rgba(59,98,246,0.15)] hover:shadow-[0_16px_50px_rgba(59,98,246,0.2)] transform hover:-translate-y-2 transition-all duration-300 cursor-pointer text-left relative z-10 overflow-hidden ring-4 ring-[#EFF4FF]">
              <div class="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#6087FB] to-[#3B62F6]"></div>
              
              <div class="flex items-start justify-between gap-4 pt-1">
                <div class="min-w-0">
                  <span class="inline-block px-2.5 py-1 text-[11px] font-bold tracking-wide uppercase bg-[#EFF4FF] text-[#3B62F6] rounded mb-3">You are here</span>
                  <p class="text-[19px] font-bold text-[#0F1420] mb-2 leading-tight">Build and deploy a small project</p>
                  <p class="text-[14px] text-[#4E586B] leading-relaxed">One page, one API call, deployed on a free host with a link you can put on your resume.</p>
                  <div class="flex items-center flex-wrap gap-2 mt-4"><span class="text-[13px] font-semibold text-[#3B62F6]">4 resources</span><span class="text-[12px] text-[#9AA5BB]">·</span><span class="text-[13px] font-semibold text-[#3B62F6]">about 2 weeks</span><span class="text-[12px] text-[#9AA5BB]">·</span><span class="text-[13px] font-semibold text-[#3B62F6]">1 project</span></div>
                </div>
                <svg class="w-5 h-5 shrink-0 stage-chevron rotate-180 transition-transform mt-2 text-[#3B62F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
              </div>
              <div class="stage-resources mt-6 pt-5 space-y-3 border-t border-[#DCE6FF]">
                <div class="bg-[#F5F7FB] border border-[#EEF1F7] rounded-lg p-4 mb-4">
                  <p class="text-[14px] font-bold text-[#0F1420] mb-2.5">What you should be able to do after this stage</p>
                  <ul class="space-y-2">
                    <li class="flex items-start gap-2"><svg class="w-4 h-4 mt-0.5 shrink-0 text-[#3B62F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg><span class="text-[13px] text-[#4E586B]">Fetch data from a public API and render it</span></li>
                    <li class="flex items-start gap-2"><svg class="w-4 h-4 mt-0.5 shrink-0 text-[#3B62F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg><span class="text-[13px] text-[#4E586B]">Handle a loading state and an error state</span></li>
                    <li class="flex items-start gap-2"><svg class="w-4 h-4 mt-0.5 shrink-0 text-[#3B62F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg><span class="text-[13px] text-[#4E586B]">Deploy to a free host and share a working link</span></li>
                  </ul>
                </div>
                <a href="resources.html" class="flex items-center gap-3 p-3 rounded-lg transition-colors hover:bg-[#EEF1F7] bg-white border border-[#E2E7F0] shadow-sm hover:shadow"><svg class="w-4 h-4 shrink-0 text-[#3B62F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg><div class="min-w-0"><p class="text-[13px] font-semibold text-[#0F1420] truncate">Deploying a static site for free</p><p class="text-[12px] text-[#6B7689]">6 min read</p></div></a>
                <div class="flex items-center gap-3 mt-5 pt-3">
                  <button class="btn-secondary flex-1 py-2.5 text-[14px] bg-[#EEF1F7] text-[#333B4A] hover:bg-[#E2E7F0]">Skip stage</button>
                  <button class="btn-primary flex-1 py-2.5 text-[14px] shadow-md hover:shadow-lg">Mark complete</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Stage 5 (Left) -->
        <div class="roadmap-stage relative z-10 flex flex-col md:flex-row w-full mb-16" data-stage="5">
          <!-- Mobile icon -->
          <div class="md:hidden absolute left-[20px] top-4 flex items-center justify-center w-10 h-10 rounded-full border-2 border-[#E2E7F0] bg-[#FBFCFE] shadow-[0_0_0_6px_#FBFCFE] z-10 text-[13px] font-bold text-[#9AA5BB]">
            5
          </div>
          
          <!-- Left Card Area -->
          <div class="w-full md:w-1/2 flex justify-end md:pr-12 pl-[80px] md:pl-0 relative group">
            <!-- Horizontal Connector (Desktop) -->
            <div class="hidden md:block absolute top-6 right-0 w-12 h-[2px] bg-gradient-to-r from-transparent to-[#E2E7F0] opacity-60"></div>
            
            <div class="max-w-[380px] w-full bg-white/60 backdrop-blur-sm border border-[#EEF1F7] rounded-xl p-6 shadow-[0_4px_15px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transform hover:-translate-y-1 transition-all duration-300 cursor-pointer text-left relative z-10 hover:bg-white/95">
              <div class="flex items-start justify-between gap-4">
                <div class="min-w-0">
                  <p class="text-[12px] font-medium text-[#9AA5BB] mb-1 uppercase tracking-wide">Not started</p>
                  <p class="text-[17px] font-bold text-[#333B4A] mb-2 leading-tight">Pick up React properly</p>
                  <p class="text-[13px] text-[#6B7689] leading-relaxed">Components, state and the two hooks you will actually use every day.</p>
                  <div class="flex items-center flex-wrap gap-2 mt-3"><span class="text-[12px] text-[#9AA5BB]">5 resources</span><span class="text-[12px] text-[#9AA5BB]">·</span><span class="text-[12px] text-[#9AA5BB]">about 4 weeks</span></div>
                </div>
                <svg class="w-5 h-5 shrink-0 stage-chevron transition-transform text-[#CBD3E1]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
              </div>
            </div>
          </div>
          
          <!-- Center icon -->
          <div class="hidden md:flex absolute left-1/2 top-6 -mt-6 -ml-6 items-center justify-center w-12 h-12 rounded-full border-[3px] border-[#FBFCFE] bg-[#F5F7FB] shadow-[0_0_0_6px_#FBFCFE] z-20 text-[14px] font-bold text-[#9AA5BB] transition-transform group-hover:scale-110">
            5
          </div>
          <!-- Right Empty -->
          <div class="hidden md:block w-1/2 pl-12"></div>
        </div>

        <!-- Stage 6 (Right) -->
        <div class="roadmap-stage relative z-10 flex flex-col md:flex-row w-full mb-16" data-stage="6">
          <!-- Mobile icon -->
          <div class="md:hidden absolute left-[20px] top-4 flex items-center justify-center w-10 h-10 rounded-full border-2 border-[#E2E7F0] bg-[#FBFCFE] shadow-[0_0_0_6px_#FBFCFE] z-10 text-[13px] font-bold text-[#9AA5BB]">
            6
          </div>
          
          <!-- Left Empty -->
          <div class="hidden md:block w-1/2 pr-12"></div>
          
          <!-- Center icon -->
          <div class="hidden md:flex absolute left-1/2 top-6 -mt-6 -ml-6 items-center justify-center w-12 h-12 rounded-full border-[3px] border-[#FBFCFE] bg-[#F5F7FB] shadow-[0_0_0_6px_#FBFCFE] z-20 text-[14px] font-bold text-[#9AA5BB] transition-transform group-hover:scale-110">
            6
          </div>

          <!-- Right Card Area -->
          <div class="w-full md:w-1/2 flex justify-start md:pl-12 pl-[80px] md:pl-0 relative group">
            <!-- Horizontal Connector (Desktop) -->
            <div class="hidden md:block absolute top-6 left-0 w-12 h-[2px] bg-gradient-to-l from-transparent to-[#E2E7F0] opacity-60"></div>
            
            <div class="max-w-[380px] w-full bg-white/60 backdrop-blur-sm border border-[#EEF1F7] rounded-xl p-6 shadow-[0_4px_15px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transform hover:-translate-y-1 transition-all duration-300 cursor-pointer text-left relative z-10 hover:bg-white/95">
              <div class="flex items-start justify-between gap-4">
                <div class="min-w-0">
                  <p class="text-[12px] font-medium text-[#9AA5BB] mb-1 uppercase tracking-wide">Not started</p>
                  <p class="text-[17px] font-bold text-[#333B4A] mb-2 leading-tight">Version control and working with others</p>
                  <p class="text-[13px] text-[#6B7689] leading-relaxed">Branches, pull requests and reading someone else's code.</p>
                  <div class="flex items-center flex-wrap gap-2 mt-3"><span class="text-[12px] text-[#9AA5BB]">3 resources</span><span class="text-[12px] text-[#9AA5BB]">·</span><span class="text-[12px] text-[#9AA5BB]">about 1 week</span></div>
                </div>
                <svg class="w-5 h-5 shrink-0 stage-chevron transition-transform text-[#CBD3E1]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
              </div>
            </div>
          </div>
        </div>

        <!-- Stage 7 (Left) -->
        <div class="roadmap-stage relative z-10 flex flex-col md:flex-row w-full mb-16" data-stage="7">
          <!-- Mobile icon -->
          <div class="md:hidden absolute left-[20px] top-4 flex items-center justify-center w-10 h-10 rounded-full border-2 border-[#E2E7F0] bg-[#FBFCFE] shadow-[0_0_0_6px_#FBFCFE] z-10 text-[13px] font-bold text-[#9AA5BB]">
            7
          </div>
          
          <!-- Left Card Area -->
          <div class="w-full md:w-1/2 flex justify-end md:pr-12 pl-[80px] md:pl-0 relative group">
            <!-- Horizontal Connector (Desktop) -->
            <div class="hidden md:block absolute top-6 right-0 w-12 h-[2px] bg-gradient-to-r from-transparent to-[#E2E7F0] opacity-60"></div>
            
            <div class="max-w-[380px] w-full bg-white/60 backdrop-blur-sm border border-[#EEF1F7] rounded-xl p-6 shadow-[0_4px_15px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transform hover:-translate-y-1 transition-all duration-300 cursor-pointer text-left relative z-10 hover:bg-white/95">
              <div class="flex items-start justify-between gap-4">
                <div class="min-w-0">
                  <p class="text-[12px] font-medium text-[#9AA5BB] mb-1 uppercase tracking-wide">Not started</p>
                  <p class="text-[17px] font-bold text-[#333B4A] mb-2 leading-tight">Prepare your resume and portfolio</p>
                  <p class="text-[13px] text-[#6B7689] leading-relaxed">Two projects written up plainly, plus the one-page resume.</p>
                  <div class="flex items-center flex-wrap gap-2 mt-3"><span class="text-[12px] text-[#9AA5BB]">3 resources</span><span class="text-[12px] text-[#9AA5BB]">·</span><span class="text-[12px] text-[#9AA5BB]">about 1 week</span></div>
                </div>
                <svg class="w-5 h-5 shrink-0 stage-chevron transition-transform text-[#CBD3E1]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
              </div>
            </div>
          </div>
          
          <!-- Center icon -->
          <div class="hidden md:flex absolute left-1/2 top-6 -mt-6 -ml-6 items-center justify-center w-12 h-12 rounded-full border-[3px] border-[#FBFCFE] bg-[#F5F7FB] shadow-[0_0_0_6px_#FBFCFE] z-20 text-[14px] font-bold text-[#9AA5BB] transition-transform group-hover:scale-110">
            7
          </div>
          <!-- Right Empty -->
          <div class="hidden md:block w-1/2 pl-12"></div>
        </div>

        <!-- Stage 8 (Right) -->
        <div class="roadmap-stage relative z-10 flex flex-col md:flex-row w-full mb-16" data-stage="8">
          <!-- Mobile icon -->
          <div class="md:hidden absolute left-[20px] top-4 flex items-center justify-center w-10 h-10 rounded-full border-2 border-[#E2E7F0] bg-[#FBFCFE] shadow-[0_0_0_6px_#FBFCFE] z-10 text-[13px] font-bold text-[#9AA5BB]">
            8
          </div>
          
          <!-- Left Empty -->
          <div class="hidden md:block w-1/2 pr-12"></div>
          
          <!-- Center icon -->
          <div class="hidden md:flex absolute left-1/2 top-6 -mt-6 -ml-6 items-center justify-center w-12 h-12 rounded-full border-[3px] border-[#FBFCFE] bg-[#F5F7FB] shadow-[0_0_0_6px_#FBFCFE] z-20 text-[14px] font-bold text-[#9AA5BB] transition-transform group-hover:scale-110">
            8
          </div>

          <!-- Right Card Area -->
          <div class="w-full md:w-1/2 flex justify-start md:pl-12 pl-[80px] md:pl-0 relative group">
            <!-- Horizontal Connector (Desktop) -->
            <div class="hidden md:block absolute top-6 left-0 w-12 h-[2px] bg-gradient-to-l from-transparent to-[#E2E7F0] opacity-60"></div>
            
            <div class="max-w-[380px] w-full bg-white/60 backdrop-blur-sm border border-[#EEF1F7] rounded-xl p-6 shadow-[0_4px_15px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transform hover:-translate-y-1 transition-all duration-300 cursor-pointer text-left relative z-10 hover:bg-white/95">
              <div class="flex items-start justify-between gap-4">
                <div class="min-w-0">
                  <p class="text-[12px] font-medium text-[#9AA5BB] mb-1 uppercase tracking-wide">Not started</p>
                  <p class="text-[17px] font-bold text-[#333B4A] mb-2 leading-tight">Interview practice</p>
                  <p class="text-[13px] text-[#6B7689] leading-relaxed">The twelve questions, the component round, and talking about your work.</p>
                  <div class="flex items-center flex-wrap gap-2 mt-3"><span class="text-[12px] text-[#9AA5BB]">5 resources</span><span class="text-[12px] text-[#9AA5BB]">·</span><span class="text-[12px] text-[#9AA5BB]">about 2 weeks</span></div>
                </div>
                <svg class="w-5 h-5 shrink-0 stage-chevron transition-transform text-[#CBD3E1]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
              </div>
            </div>
          </div>
        </div>
      </div>
"@

$content -replace "(?s)      <!-- STAGES -->.*?      <!-- Right Sidebar Content", "$replacement`r`n`r`n      <!-- Right Sidebar Content" | Set-Content -Path "roadmap.html"
