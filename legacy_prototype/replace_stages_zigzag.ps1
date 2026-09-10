$content = Get-Content -Path "roadmap.html" -Raw

$replacement = @"
      <!-- STAGES -->
      <div class="roadmap-timeline relative max-w-[900px] mx-auto py-4">
        <!-- The vertical connecting line -->
        <div class="absolute top-8 bottom-8 left-[39px] md:left-1/2 md:-ml-[1px] w-0.5 z-0" style="background:#E2E7F0"></div>

        <!-- Stage 1 — Done (Left) -->
        <div class="roadmap-stage relative z-10 flex flex-col md:flex-row w-full mb-8" data-stage="1">
          <!-- Mobile icon -->
          <div class="md:hidden absolute left-[20px] top-5 flex items-center justify-center w-10 h-10 rounded-full border-2 border-[#12A150] bg-[#E8F8EE] shadow-[0_0_0_8px_#FBFCFE] z-10">
            <svg class="w-5 h-5 text-[#12A150]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
          </div>
          <!-- Left Card -->
          <div class="w-full md:w-1/2 md:pr-12 pl-[80px] md:pl-0">
            <div class="bg-white border border-[#EEF1F7] rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow cursor-pointer w-full text-left">
              <div class="flex items-start justify-between gap-4">
                <div class="min-w-0">
                  <p style="font-size:12px;line-height:18px;font-weight:500;color:#0B7038;margin-bottom:4px">Done</p>
                  <p style="font-size:17px;line-height:24px;font-weight:500;color:#0F1420;margin-bottom:4px">Get comfortable with HTML and the browser</p>
                  <p style="font-size:13px;line-height:20px;color:#6B7689">Structure, semantics and what the browser does with your markup. No frameworks yet.</p>
                  <div class="flex items-center flex-wrap gap-2 mt-2"><span style="font-size:12px;line-height:18px;color:#9AA5BB">4 resources</span><span style="font-size:12px;line-height:18px;color:#9AA5BB">·</span><span style="font-size:12px;line-height:18px;color:#9AA5BB">about 2 weeks</span></div>
                </div>
                <svg class="w-5 h-5 shrink-0 stage-chevron transition-transform" style="color:#CBD3E1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
              </div>
              <div class="stage-resources hidden mt-4 pt-4 space-y-2.5" style="border-top:1px solid #EEF1F7">
                <a href="resources.html" class="flex items-center gap-3 p-3 rounded-lg transition-colors hover:bg-[#EEF1F7]" style="background:#F5F7FB"><svg class="w-4 h-4 shrink-0" style="color:#3B62F6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg><div class="min-w-0"><p style="font-size:12px;line-height:18px;font-weight:500;color:#0F1420;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">HTML basics — tags, attributes, nesting</p><p style="font-size:12px;line-height:18px;color:#9AA5BB">5 min read</p></div></a>
                <a href="resources.html" class="flex items-center gap-3 p-3 rounded-lg transition-colors hover:bg-[#EEF1F7]" style="background:#F5F7FB"><svg class="w-4 h-4 shrink-0" style="color:#3B62F6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg><div class="min-w-0"><p style="font-size:12px;line-height:18px;font-weight:500;color:#0F1420;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">The browser rendering pipeline</p><p style="font-size:12px;line-height:18px;color:#9AA5BB">6 min read</p></div></a>
              </div>
            </div>
          </div>
          <!-- Center icon -->
          <div class="hidden md:flex absolute left-1/2 top-8 -mt-6 -ml-6 items-center justify-center w-12 h-12 rounded-full border-[3px] border-[#12A150] bg-[#E8F8EE] shadow-[0_0_0_8px_#FBFCFE] z-10">
            <svg class="w-6 h-6 text-[#12A150]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
          </div>
          <!-- Right Empty -->
          <div class="hidden md:block w-1/2 pl-12"></div>
        </div>

        <!-- Stage 2 — Done (Right) -->
        <div class="roadmap-stage relative z-10 flex flex-col md:flex-row w-full mb-8" data-stage="2">
          <!-- Mobile icon -->
          <div class="md:hidden absolute left-[20px] top-5 flex items-center justify-center w-10 h-10 rounded-full border-2 border-[#12A150] bg-[#E8F8EE] shadow-[0_0_0_8px_#FBFCFE] z-10">
            <svg class="w-5 h-5 text-[#12A150]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
          </div>
          <!-- Left Empty -->
          <div class="hidden md:block w-1/2 pr-12"></div>
          <!-- Center icon -->
          <div class="hidden md:flex absolute left-1/2 top-8 -mt-6 -ml-6 items-center justify-center w-12 h-12 rounded-full border-[3px] border-[#12A150] bg-[#E8F8EE] shadow-[0_0_0_8px_#FBFCFE] z-10">
            <svg class="w-6 h-6 text-[#12A150]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
          </div>
          <!-- Right Card -->
          <div class="w-full md:w-1/2 md:pl-12 pl-[80px] md:pl-0">
            <div class="bg-white border border-[#EEF1F7] rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow cursor-pointer w-full text-left">
              <div class="flex items-start justify-between gap-4">
                <div class="min-w-0">
                  <p style="font-size:12px;line-height:18px;font-weight:500;color:#0B7038;margin-bottom:4px">Done</p>
                  <p style="font-size:17px;line-height:24px;font-weight:500;color:#0F1420;margin-bottom:4px">CSS layout without guessing</p>
                  <p style="font-size:13px;line-height:20px;color:#6B7689">Flexbox and grid until you can build a page without trial and error.</p>
                  <div class="flex items-center flex-wrap gap-2 mt-2"><span style="font-size:12px;line-height:18px;color:#9AA5BB">5 resources</span><span style="font-size:12px;line-height:18px;color:#9AA5BB">·</span><span style="font-size:12px;line-height:18px;color:#9AA5BB">about 3 weeks</span></div>
                </div>
                <svg class="w-5 h-5 shrink-0 stage-chevron transition-transform" style="color:#CBD3E1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
              </div>
              <div class="stage-resources hidden mt-4 pt-4 space-y-2.5" style="border-top:1px solid #EEF1F7">
                <a href="resources.html" class="flex items-center gap-3 p-3 rounded-lg transition-colors hover:bg-[#EEF1F7]" style="background:#F5F7FB"><svg class="w-4 h-4 shrink-0" style="color:#3B62F6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg><div class="min-w-0"><p style="font-size:12px;line-height:18px;font-weight:500;color:#0F1420;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">Flexbox — the only layout model you need first</p><p style="font-size:12px;line-height:18px;color:#9AA5BB">8 min read</p></div></a>
              </div>
            </div>
          </div>
        </div>

        <!-- Stage 3 — Done (Left) -->
        <div class="roadmap-stage relative z-10 flex flex-col md:flex-row w-full mb-8" data-stage="3">
          <!-- Mobile icon -->
          <div class="md:hidden absolute left-[20px] top-5 flex items-center justify-center w-10 h-10 rounded-full border-2 border-[#12A150] bg-[#E8F8EE] shadow-[0_0_0_8px_#FBFCFE] z-10">
            <svg class="w-5 h-5 text-[#12A150]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
          </div>
          <!-- Left Card -->
          <div class="w-full md:w-1/2 md:pr-12 pl-[80px] md:pl-0">
            <div class="bg-white border border-[#EEF1F7] rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow cursor-pointer w-full text-left">
              <div class="flex items-start justify-between gap-4">
                <div class="min-w-0">
                  <p style="font-size:12px;line-height:18px;font-weight:500;color:#0B7038;margin-bottom:4px">Done</p>
                  <p style="font-size:17px;line-height:24px;font-weight:500;color:#0F1420;margin-bottom:4px">JavaScript on its own</p>
                  <p style="font-size:13px;line-height:20px;color:#6B7689">The language before the library — types, functions, the DOM and fetch.</p>
                  <div class="flex items-center flex-wrap gap-2 mt-2"><span style="font-size:12px;line-height:18px;color:#9AA5BB">6 resources</span><span style="font-size:12px;line-height:18px;color:#9AA5BB">·</span><span style="font-size:12px;line-height:18px;color:#9AA5BB">about 4 weeks</span></div>
                </div>
                <svg class="w-5 h-5 shrink-0 stage-chevron transition-transform" style="color:#CBD3E1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
              </div>
              <div class="stage-resources hidden mt-4 pt-4 space-y-2.5" style="border-top:1px solid #EEF1F7">
                <a href="resources.html" class="flex items-center gap-3 p-3 rounded-lg transition-colors hover:bg-[#EEF1F7]" style="background:#F5F7FB"><svg class="w-4 h-4 shrink-0" style="color:#3B62F6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg><div class="min-w-0"><p style="font-size:12px;line-height:18px;font-weight:500;color:#0F1420;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">JavaScript fundamentals — types, functions, scope</p><p style="font-size:12px;line-height:18px;color:#9AA5BB">12 min read</p></div></a>
              </div>
            </div>
          </div>
          <!-- Center icon -->
          <div class="hidden md:flex absolute left-1/2 top-8 -mt-6 -ml-6 items-center justify-center w-12 h-12 rounded-full border-[3px] border-[#12A150] bg-[#E8F8EE] shadow-[0_0_0_8px_#FBFCFE] z-10">
            <svg class="w-6 h-6 text-[#12A150]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
          </div>
          <!-- Right Empty -->
          <div class="hidden md:block w-1/2 pl-12"></div>
        </div>

        <!-- Stage 4 — Current (Right) -->
        <div id="stage-4" class="roadmap-stage current relative z-10 flex flex-col md:flex-row w-full mb-8" data-stage="4">
          <!-- Mobile icon -->
          <div class="md:hidden absolute left-[20px] top-5 flex items-center justify-center w-10 h-10 rounded-full border-2 border-[#EFF4FF] bg-[#3B62F6] shadow-[0_0_0_8px_#FBFCFE] z-10 text-white font-bold text-sm">
            4
          </div>
          <!-- Left Empty -->
          <div class="hidden md:block w-1/2 pr-12"></div>
          <!-- Center icon -->
          <div class="hidden md:flex absolute left-1/2 top-8 -mt-6 -ml-6 items-center justify-center w-12 h-12 rounded-full border-[3px] border-[#EFF4FF] bg-[#3B62F6] shadow-[0_0_0_8px_#FBFCFE,0_0_15px_rgba(59,98,246,0.6)] z-10 text-white font-bold text-lg">
            4
          </div>
          <!-- Right Card -->
          <div class="w-full md:w-1/2 md:pl-12 pl-[80px] md:pl-0">
            <div class="bg-white border-2 border-[#3B62F6] rounded-xl p-5 shadow-lg cursor-pointer w-full text-left relative overflow-hidden transform hover:-translate-y-1 transition-transform duration-200">
              <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#6087FB] to-[#3B62F6]"></div>
              <div class="flex items-start justify-between gap-4 pt-1">
                <div class="min-w-0">
                  <span class="inline-block px-2 py-1 text-[11px] font-bold tracking-wide uppercase bg-[#EFF4FF] text-[#3B62F6] rounded mb-3">You are here</span>
                  <p class="text-[17px] font-bold text-[#0F1420] mb-1">Build and deploy a small project</p>
                  <p class="text-[13px] text-[#4E586B] leading-relaxed">One page, one API call, deployed on a free host with a link you can put on your resume.</p>
                  <div class="flex items-center flex-wrap gap-2 mt-3"><span class="text-[12px] font-semibold text-[#3B62F6]">4 resources</span><span class="text-[12px] text-[#9AA5BB]">·</span><span class="text-[12px] font-semibold text-[#3B62F6]">about 2 weeks</span><span class="text-[12px] text-[#9AA5BB]">·</span><span class="text-[12px] font-semibold text-[#3B62F6]">1 project</span></div>
                </div>
                <svg class="w-5 h-5 shrink-0 stage-chevron rotate-180 transition-transform mt-2 text-[#3B62F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
              </div>
              <div class="stage-resources mt-5 pt-5 space-y-3" style="border-top:1px solid #DCE6FF">
                <div class="bg-[#F5F7FB] border border-[#EEF1F7] rounded-lg p-4">
                  <p class="text-[14px] font-bold text-[#0F1420] mb-2">What you should be able to do after this stage</p>
                  <ul class="space-y-2">
                    <li class="flex items-start gap-2"><svg class="w-4 h-4 mt-0.5 shrink-0 text-[#3B62F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg><span class="text-[13px] text-[#4E586B]">Fetch data from a public API and render it</span></li>
                    <li class="flex items-start gap-2"><svg class="w-4 h-4 mt-0.5 shrink-0 text-[#3B62F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg><span class="text-[13px] text-[#4E586B]">Handle a loading state and an error state</span></li>
                    <li class="flex items-start gap-2"><svg class="w-4 h-4 mt-0.5 shrink-0 text-[#3B62F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg><span class="text-[13px] text-[#4E586B]">Deploy to a free host and share a working link</span></li>
                  </ul>
                </div>
                <a href="resources.html" class="flex items-center gap-3 p-3 rounded-lg transition-colors hover:bg-[#EEF1F7] bg-white border border-[#E2E7F0]"><svg class="w-4 h-4 shrink-0 text-[#3B62F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg><div class="min-w-0"><p class="text-[13px] font-semibold text-[#0F1420] truncate">Deploying a static site for free</p><p class="text-[12px] text-[#6B7689]">6 min read</p></div></a>
                <div class="flex items-center gap-3 mt-4 pt-2">
                  <button class="btn-secondary px-4 py-2 text-[14px] bg-[#EEF1F7] text-[#333B4A]">Skip this stage</button>
                  <button class="btn-primary px-4 py-2 text-[14px]">Mark stage complete</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Stage 5 (Left) -->
        <div class="roadmap-stage relative z-10 flex flex-col md:flex-row w-full mb-8" data-stage="5">
          <!-- Mobile icon -->
          <div class="md:hidden absolute left-[20px] top-5 flex items-center justify-center w-10 h-10 rounded-full border-2 border-[#E2E7F0] bg-[#FFFFFF] shadow-[0_0_0_8px_#FBFCFE] z-10 text-[13px] font-bold text-[#9AA5BB]">
            5
          </div>
          <!-- Left Card -->
          <div class="w-full md:w-1/2 md:pr-12 pl-[80px] md:pl-0">
            <div class="bg-white border border-[#EEF1F7] rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow cursor-pointer w-full text-left opacity-80 hover:opacity-100">
              <div class="flex items-start justify-between gap-4">
                <div class="min-w-0">
                  <p style="font-size:12px;line-height:18px;color:#9AA5BB;margin-bottom:4px">Not started · 5 resources</p>
                  <p style="font-size:17px;line-height:24px;font-weight:500;color:#0F1420;margin-bottom:4px">Pick up React properly</p>
                  <p style="font-size:13px;line-height:20px;color:#6B7689">Components, state and the two hooks you will actually use every day.</p>
                  <div class="flex items-center flex-wrap gap-2 mt-2"><span style="font-size:12px;line-height:18px;color:#9AA5BB">5 resources</span><span style="font-size:12px;line-height:18px;color:#9AA5BB">·</span><span style="font-size:12px;line-height:18px;color:#9AA5BB">about 4 weeks</span></div>
                </div>
                <svg class="w-5 h-5 shrink-0 stage-chevron transition-transform" style="color:#CBD3E1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
              </div>
            </div>
          </div>
          <!-- Center icon -->
          <div class="hidden md:flex absolute left-1/2 top-8 -mt-6 -ml-6 items-center justify-center w-12 h-12 rounded-full border-[3px] border-[#E2E7F0] bg-[#FFFFFF] shadow-[0_0_0_8px_#FBFCFE] z-10 text-[14px] font-bold text-[#9AA5BB]">
            5
          </div>
          <!-- Right Empty -->
          <div class="hidden md:block w-1/2 pl-12"></div>
        </div>

        <!-- Stage 6 (Right) -->
        <div class="roadmap-stage relative z-10 flex flex-col md:flex-row w-full mb-8" data-stage="6">
          <!-- Mobile icon -->
          <div class="md:hidden absolute left-[20px] top-5 flex items-center justify-center w-10 h-10 rounded-full border-2 border-[#E2E7F0] bg-[#FFFFFF] shadow-[0_0_0_8px_#FBFCFE] z-10 text-[13px] font-bold text-[#9AA5BB]">
            6
          </div>
          <!-- Left Empty -->
          <div class="hidden md:block w-1/2 pr-12"></div>
          <!-- Center icon -->
          <div class="hidden md:flex absolute left-1/2 top-8 -mt-6 -ml-6 items-center justify-center w-12 h-12 rounded-full border-[3px] border-[#E2E7F0] bg-[#FFFFFF] shadow-[0_0_0_8px_#FBFCFE] z-10 text-[14px] font-bold text-[#9AA5BB]">
            6
          </div>
          <!-- Right Card -->
          <div class="w-full md:w-1/2 md:pl-12 pl-[80px] md:pl-0">
            <div class="bg-white border border-[#EEF1F7] rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow cursor-pointer w-full text-left opacity-80 hover:opacity-100">
              <div class="flex items-start justify-between gap-4">
                <div class="min-w-0">
                  <p style="font-size:12px;line-height:18px;color:#9AA5BB;margin-bottom:4px">Not started · 3 resources</p>
                  <p style="font-size:17px;line-height:24px;font-weight:500;color:#0F1420;margin-bottom:4px">Version control and working with others</p>
                  <p style="font-size:13px;line-height:20px;color:#6B7689">Branches, pull requests and reading someone else's code.</p>
                  <div class="flex items-center flex-wrap gap-2 mt-2"><span style="font-size:12px;line-height:18px;color:#9AA5BB">3 resources</span><span style="font-size:12px;line-height:18px;color:#9AA5BB">·</span><span style="font-size:12px;line-height:18px;color:#9AA5BB">about 1 week</span></div>
                </div>
                <svg class="w-5 h-5 shrink-0 stage-chevron transition-transform" style="color:#CBD3E1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
              </div>
            </div>
          </div>
        </div>

        <!-- Stage 7 (Left) -->
        <div class="roadmap-stage relative z-10 flex flex-col md:flex-row w-full mb-8" data-stage="7">
          <!-- Mobile icon -->
          <div class="md:hidden absolute left-[20px] top-5 flex items-center justify-center w-10 h-10 rounded-full border-2 border-[#E2E7F0] bg-[#FFFFFF] shadow-[0_0_0_8px_#FBFCFE] z-10 text-[13px] font-bold text-[#9AA5BB]">
            7
          </div>
          <!-- Left Card -->
          <div class="w-full md:w-1/2 md:pr-12 pl-[80px] md:pl-0">
            <div class="bg-white border border-[#EEF1F7] rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow cursor-pointer w-full text-left opacity-80 hover:opacity-100">
              <div class="flex items-start justify-between gap-4">
                <div class="min-w-0">
                  <p style="font-size:12px;line-height:18px;color:#9AA5BB;margin-bottom:4px">Not started · 3 resources</p>
                  <p style="font-size:17px;line-height:24px;font-weight:500;color:#0F1420;margin-bottom:4px">Prepare your resume and portfolio</p>
                  <p style="font-size:13px;line-height:20px;color:#6B7689">Two projects written up plainly, plus the one-page resume.</p>
                  <div class="flex items-center flex-wrap gap-2 mt-2"><span style="font-size:12px;line-height:18px;color:#9AA5BB">3 resources</span><span style="font-size:12px;line-height:18px;color:#9AA5BB">·</span><span style="font-size:12px;line-height:18px;color:#9AA5BB">about 1 week</span></div>
                </div>
                <svg class="w-5 h-5 shrink-0 stage-chevron transition-transform" style="color:#CBD3E1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
              </div>
            </div>
          </div>
          <!-- Center icon -->
          <div class="hidden md:flex absolute left-1/2 top-8 -mt-6 -ml-6 items-center justify-center w-12 h-12 rounded-full border-[3px] border-[#E2E7F0] bg-[#FFFFFF] shadow-[0_0_0_8px_#FBFCFE] z-10 text-[14px] font-bold text-[#9AA5BB]">
            7
          </div>
          <!-- Right Empty -->
          <div class="hidden md:block w-1/2 pl-12"></div>
        </div>

        <!-- Stage 8 (Right) -->
        <div class="roadmap-stage relative z-10 flex flex-col md:flex-row w-full mb-8" data-stage="8">
          <!-- Mobile icon -->
          <div class="md:hidden absolute left-[20px] top-5 flex items-center justify-center w-10 h-10 rounded-full border-2 border-[#E2E7F0] bg-[#FFFFFF] shadow-[0_0_0_8px_#FBFCFE] z-10 text-[13px] font-bold text-[#9AA5BB]">
            8
          </div>
          <!-- Left Empty -->
          <div class="hidden md:block w-1/2 pr-12"></div>
          <!-- Center icon -->
          <div class="hidden md:flex absolute left-1/2 top-8 -mt-6 -ml-6 items-center justify-center w-12 h-12 rounded-full border-[3px] border-[#E2E7F0] bg-[#FFFFFF] shadow-[0_0_0_8px_#FBFCFE] z-10 text-[14px] font-bold text-[#9AA5BB]">
            8
          </div>
          <!-- Right Card -->
          <div class="w-full md:w-1/2 md:pl-12 pl-[80px] md:pl-0">
            <div class="bg-white border border-[#EEF1F7] rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow cursor-pointer w-full text-left opacity-80 hover:opacity-100">
              <div class="flex items-start justify-between gap-4">
                <div class="min-w-0">
                  <p style="font-size:12px;line-height:18px;color:#9AA5BB;margin-bottom:4px">Not started · 5 resources</p>
                  <p style="font-size:17px;line-height:24px;font-weight:500;color:#0F1420;margin-bottom:4px">Interview practice</p>
                  <p style="font-size:13px;line-height:20px;color:#6B7689">The twelve questions, the component round, and talking about your work.</p>
                  <div class="flex items-center flex-wrap gap-2 mt-2"><span style="font-size:12px;line-height:18px;color:#9AA5BB">5 resources</span><span style="font-size:12px;line-height:18px;color:#9AA5BB">·</span><span style="font-size:12px;line-height:18px;color:#9AA5BB">about 2 weeks</span></div>
                </div>
                <svg class="w-5 h-5 shrink-0 stage-chevron transition-transform" style="color:#CBD3E1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
              </div>
            </div>
          </div>
        </div>
      </div>
"@

$content -replace "(?s)      <!-- STAGES -->.*?      <!-- Right Sidebar Content", "$replacement`r`n`r`n      <!-- Right Sidebar Content" | Set-Content -Path "roadmap.html"
