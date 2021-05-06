
			/* jquery.scrolly v0.1 | (c) n33 | n33.co @n33co | MIT */
			(function(e){var t="click.scrolly";e.fn.scrolly=function(r,i){var s=e(this);return r||(r=1e3),i||(i=0),s.off(t).on(t,function(t){var n,s,o,u=e(this),a=u.attr("href");a.charAt(0)=="#"&&a.length>1&&(n=e(a)).length>0&&(s=n.offset().top,u.hasClass("scrolly-centered")?o=s-(e(window).height()-n.outerHeight())/2:(o=Math.max(s,0),i&&(typeof i=="function"?o-=i():o-=i)),t.preventDefault(),e("body,html").stop().animate({scrollTop:o},r,"swing"))}),s}})(jQuery);

			$(function() {

				$('.item').scrollex({

					// Scroll event: Perform various CSS tweaks based on the user's progress through this element.
						scroll: function(progress) {

							var $this = $(this),
								$container = $this.find('.container'),
								$title = $this.find('.title'),
								$p = $this.find('p'),
								$next = $this.find('.next'),
								x;

							// Title.

								// Rotation.
									x = (progress - 0.5) * 540;

									$title
										.css('-moz-transform', 'rotateX(' + x + 'deg)')
										.css('-webkit-transform', 'rotateX(' + x + 'deg)')
										.css('-o-transform', 'rotateX(' + x + 'deg)')
										.css('-ms-transform', 'rotateX(' + x + 'deg)')
										.css('transform', 'rotateX(' + x + 'deg)');

								// Opacity.
									if (progress > 0.5)
										x = 1 - progress;
									else
										x = progress;

									x = Math.max(0, Math.min(1, x * 2));

									$title.css('opacity', x);

							// Paragraph.

								// Opacity.
									if (progress > 0.5)
										x = 1 - progress;
									else
										x = progress;

									x = Math.max(0, Math.min(1, x * 2));

									$p.css('opacity', x);

							// Next.

								// Opacity.
									x = 1 - (Math.max(0, progress - 0.5) * 1.5);

									$next.css('opacity', x)

								// Scale.
									x = 1 - (Math.max(0, progress - 0.5));

									$next
										.css('-moz-transform', 'scale(' + x + ')')
										.css('-webkit-transform', 'scale(' + x + ')')
										.css('-o-transform', 'scale(' + x + ')')
										.css('-ms-transform', 'scale(' + x + ')')
										.css('transform', 'scale(' + x + ')');

								// Scrolly.
									$next.scrolly(3000);

						}

				});

			});
