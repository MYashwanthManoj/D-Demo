$content = Get-Content -Path "roadmap.html" -Raw

$replacement = @"
      <!-- STAGES -->
      <div class="roadmap-timeline relative">
        <div class="absolute top-6 bottom-6 left-[19px] w-0.5 z-0" style="background:#E2E7F0"></div>

        <!-- Stage 1 — Done -->
        <div class="roadmap-stage relative z-10 flex gap-4 md:gap-6 mb-6" data-stage="1">
          <div style="width:40px;height:40px;border-radius:9999px;background:#E8F8EE;border:2px solid #12A150;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:16px;box-shadow:0 0 0 8px #FBFCFE">
            <svg class="w-5 h-5" style="color:#12A150" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
          </div>
          <div class="flex-1 bg-white border border-[#EEF1F7] rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
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
              <a href="resources.html" class="flex items-center gap-3 p-3 rounded-lg transition-colors" style="background:#F5F7FB"><svg class="w-4 h-4 shrink-0" style="color:#3B62F6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg><div class="min-w-0"><p style="font-size:12px;line-height:18px;font-weight:500;color:#0F1420;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">HTML basics — tags, attributes, nesting</p><p style="font-size:12px;line-height:18px;color:#9AA5BB">5 min read</p></div></a>
              <a href="resources.html" class="flex items-center gap-3 p-3 rounded-lg transition-colors" style="background:#F5F7FB"><svg class="w-4 h-4 shrink-0" style="color:#3B62F6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg><div class="min-w-0"><p style="font-size:12px;line-height:18px;font-weight:500;color:#0F1420;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">The browser rendering pipeline</p><p style="font-size:12px;line-height:18px;color:#9AA5BB">6 min read</p></div></a>
            </div>
          </div>
        </div>

        <!-- Stage 2 — Done -->
        <div class="roadmap-stage relative z-10 flex gap-4 md:gap-6 mb-6" data-stage="2">
          <div style="width:40px;height:40px;border-radius:9999px;background:#E8F8EE;border:2px solid #12A150;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:16px;box-shadow:0 0 0 8px #FBFCFE">
            <svg class="w-5 h-5" style="color:#12A150" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
          </div>
          <div class="flex-1 bg-white border border-[#EEF1F7] rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
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
              <a href="resources.html" class="flex items-center gap-3 p-3 rounded-lg transition-colors" style="background:#F5F7FB"><svg class="w-4 h-4 shrink-0" style="color:#3B62F6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg><div class="min-w-0"><p style="font-size:12px;line-height:18px;font-weight:500;color:#0F1420;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">Flexbox — the only layout model you need first</p><p style="font-size:12px;line-height:18px;color:#9AA5BB">8 min read</p></div></a>
            </div>
          </div>
        </div>

        <!-- Stage 3 — Done -->
        <div class="roadmap-stage relative z-10 flex gap-4 md:gap-6 mb-6" data-stage="3">
          <div style="width:40px;height:40px;border-radius:9999px;background:#E8F8EE;border:2px solid #12A150;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:16px;box-shadow:0 0 0 8px #FBFCFE">
            <svg class="w-5 h-5" style="color:#12A150" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
          </div>
          <div class="flex-1 bg-white border border-[#EEF1F7] rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
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
              <a href="resources.html" class="flex items-center gap-3 p-3 rounded-lg transition-colors" style="background:#F5F7FB"><svg class="w-4 h-4 shrink-0" style="color:#3B62F6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg><div class="min-w-0"><p style="font-size:12px;line-height:18px;font-weight:500;color:#0F1420;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">JavaScript fundamentals — types, functions, scope</p><p style="font-size:12px;line-height:18px;color:#9AA5BB">12 min read</p></div></a>
            </div>
          </div>
        </div>

        <!-- Stage 4 — Current -->
        <div id="stage-4" class="roadmap-stage current relative z-10 flex gap-4 md:gap-6 mb-6" data-stage="4">
          <div style="width:40px;height:40px;border-radius:9999px;background:#3B62F6;border:4px solid #EFF4FF;display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:600;color:#FFFFFF;flex-shrink:0;margin-top:16px;box-shadow:0 0 0 6px #FBFCFE">
            4
          </div>
          <div class="flex-1 bg-white border-2 border-[#3B62F6] rounded-xl p-5 shadow-md cursor-pointer relative" style="overflow:hidden">
            <div class="absolute top-0 left-0 right-0 h-1" style="background:linear-gradient(90deg, #6087FB, #3B62F6)"></div>
            <div class="flex items-start justify-between gap-4">
              <div class="min-w-0 pt-1">
                <span style="display:inline-block;padding:2px 8px;font-size:11px;line-height:16px;font-weight:600;background:#EFF4FF;color:#3B62F6;border-radius:4px;margin-bottom:8px">You are here</span>
                <p style="font-size:17px;line-height:24px;font-weight:600;color:#0F1420;margin-bottom:4px">Build and deploy a small project</p>
                <p style="font-size:13px;line-height:20px;color:#4E586B">One page, one API call, deployed on a free host with a link you can put on your resume.</p>
                <div class="flex items-center flex-wrap gap-2 mt-3"><span style="font-size:12px;line-height:18px;font-weight:500;color:#3B62F6">4 resources</span><span style="font-size:12px;line-height:18px;color:#9AA5BB">·</span><span style="font-size:12px;line-height:18px;font-weight:500;color:#3B62F6">about 2 weeks</span><span style="font-size:12px;line-height:18px;color:#9AA5BB">·</span><span style="font-size:12px;line-height:18px;font-weight:500;color:#3B62F6">1 project</span></div>
              </div>
              <svg class="w-5 h-5 shrink-0 stage-chevron rotate-180 transition-transform mt-2" style="color:#3B62F6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
            </div>
            <div class="stage-resources mt-5 pt-5 space-y-3" style="border-top:1px solid #DCE6FF">
              <div style="background:#F5F7FB;border:1px solid #EEF1F7;border-radius:8px;padding:16px">
                <p style="font-size:14px;line-height:20px;font-weight:600;color:#0F1420;margin-bottom:8px">What you should be able to do after this stage</p>
                <ul class="space-y-2">
                  <li class="flex items-start gap-2"><svg class="w-4 h-4 mt-0.5 shrink-0" style="color:#3B62F6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg><span style="font-size:13px;line-height:20px;color:#4E586B">Fetch data from a public API and render it</span></li>
                  <li class="flex items-start gap-2"><svg class="w-4 h-4 mt-0.5 shrink-0" style="color:#3B62F6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg><span style="font-size:13px;line-height:20px;color:#4E586B">Handle a loading state and an error state</span></li>
                  <li class="flex items-start gap-2"><svg class="w-4 h-4 mt-0.5 shrink-0" style="color:#3B62F6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg><span style="font-size:13px;line-height:20px;color:#4E586B">Deploy to a free host and share a working link</span></li>
                </ul>
              </div>
              <a href="resources.html" class="flex items-center gap-3 p-3 rounded-lg transition-colors hover:bg-[#EEF1F7]" style="background:#FFFFFF;border:1px solid #E2E7F0"><svg class="w-4 h-4 shrink-0" style="color:#3B62F6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg><div class="min-w-0"><p style="font-size:13px;line-height:18px;font-weight:500;color:#0F1420;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">Deploying a static site for free</p><p style="font-size:12px;line-height:18px;color:#6B7689">6 min read</p></div></a>
              <div class="flex items-center gap-3 mt-4 pt-2">
                <button class="btn-secondary" style="padding:10px 18px;font-size:14px;background:#EEF1F7;color:#333B4A">Skip this stage</button>
                <button class="btn-primary" style="padding:10px 18px;font-size:14px">Mark stage complete</button>
              </div>
            </div>
          </div>
        </div>

        <!-- Stage 5 -->
        <div class="roadmap-stage relative z-10 flex gap-4 md:gap-6 mb-6" data-stage="5">
          <div style="width:40px;height:40px;border-radius:9999px;background:#FFFFFF;border:2px solid #E2E7F0;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:600;color:#9AA5BB;flex-shrink:0;margin-top:16px;box-shadow:0 0 0 8px #FBFCFE">
            5
          </div>
          <div class="flex-1 bg-white border border-[#EEF1F7] rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow cursor-pointer opacity-80 hover:opacity-100">
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

        <!-- Stage 6 -->
        <div class="roadmap-stage relative z-10 flex gap-4 md:gap-6 mb-6" data-stage="6">
          <div style="width:40px;height:40px;border-radius:9999px;background:#FFFFFF;border:2px solid #E2E7F0;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:600;color:#9AA5BB;flex-shrink:0;margin-top:16px;box-shadow:0 0 0 8px #FBFCFE">
            6
          </div>
          <div class="flex-1 bg-white border border-[#EEF1F7] rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow cursor-pointer opacity-80 hover:opacity-100">
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

        <!-- Stage 7 -->
        <div class="roadmap-stage relative z-10 flex gap-4 md:gap-6 mb-6" data-stage="7">
          <div style="width:40px;height:40px;border-radius:9999px;background:#FFFFFF;border:2px solid #E2E7F0;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:600;color:#9AA5BB;flex-shrink:0;margin-top:16px;box-shadow:0 0 0 8px #FBFCFE">
            7
          </div>
          <div class="flex-1 bg-white border border-[#EEF1F7] rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow cursor-pointer opacity-80 hover:opacity-100">
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

        <!-- Stage 8 -->
        <div class="roadmap-stage relative z-10 flex gap-4 md:gap-6 mb-6" data-stage="8">
          <div style="width:40px;height:40px;border-radius:9999px;background:#FFFFFF;border:2px solid #E2E7F0;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:600;color:#9AA5BB;flex-shrink:0;margin-top:16px;box-shadow:0 0 0 8px #FBFCFE">
            8
          </div>
          <div class="flex-1 bg-white border border-[#EEF1F7] rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow cursor-pointer opacity-80 hover:opacity-100">
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
"@

$content -replace "(?s)      <!-- STAGES -->.*?      </div>\r?\n\r?\n      <!-- Right Sidebar Content", "$replacement`r`n`r`n      <!-- Right Sidebar Content" | Set-Content -Path "roadmap.html"
