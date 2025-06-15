import { useTelegramUser } from '@telegram/contexts/TelegramUserContext';
import { PageTemplate } from '@telegram/templates/PageTemplate';
import { NextPage } from 'next';
import Image from 'next/image';
import { PiBinary, PiCurrencyCircleDollar, PiDetective, PiFileDoc, PiTranslate } from 'react-icons/pi';

const ProfilePage: NextPage = () => {
	const { isAuthenticated, user } = useTelegramUser();

	const fullName = `${user?.first_name ?? ''} ${user?.last_name}`.trim();

	return (
		<PageTemplate activeId="profile">
			<div className="p-4">
				<div className="flex flex-col gap-y-4">
					{user && (
						<>
							<div className="flex gap-x-4 rounded-2xl border border-neutral-900 bg-neutral-950 p-4 shadow shadow-neutral-900">
								<div className="flex items-center">
									<div className="aspect-square w-20 overflow-hidden rounded-full border border-neutral-900">
										<Image src={user.photo_url} alt={user?.username ?? ''} width={128} height={128} />
									</div>
								</div>
								<div className="flex grow flex-col justify-center gap-y-2 truncate">
									<p className="truncate text-xl leading-none font-black">{fullName}</p>
									<p className="truncate text-sm leading-none">@{user.username}</p>
									<div>
										{isAuthenticated ? (
											<div className="inline-block rounded-full bg-green-900 px-2 py-0.5 text-xs text-neutral-100">
												Authenticated
											</div>
										) : (
											<div className="inline-block rounded-full bg-red-900 px-2 py-0.5 text-xs text-neutral-100">
												Unauthenticated
											</div>
										)}
									</div>
								</div>
							</div>
							<div className="px-4">
								<hr className="border-neutral-900" />
							</div>
						</>
					)}
					<div className="flex items-center justify-between rounded-full border border-neutral-900 bg-neutral-950 px-4 py-2 shadow shadow-neutral-900">
						<div className="flex items-center gap-x-2">
							<PiCurrencyCircleDollar className="text-xl text-yellow-500" />
							<span>Currency</span>
						</div>
						<select
							id="currency"
							name="currency"
							className="text-align-last-right appearance-none text-right text-yellow-500"
							defaultValue="USD">
							<optgroup label="Asia">
								<option value="CNY">CNY</option>
								<option value="JPY">JPY</option>
								<option value="KRW">KRW</option>
								<option value="VND">VND</option>
							</optgroup>
							<optgroup label="Europe">
								<option value="EUR">EUR</option>
								<option value="GBP">GBP</option>
							</optgroup>
							<optgroup label="North America">
								<option value="CAD">CAD</option>
								<option value="USD">USD</option>
							</optgroup>
							<optgroup label="Oceania">
								<option value="AUD">AUD</option>
							</optgroup>
						</select>
					</div>
					<div className="flex items-center justify-between rounded-full border border-neutral-900 bg-neutral-950 px-4 py-2 shadow shadow-neutral-900">
						<div className="flex items-center gap-x-2">
							<PiTranslate className="text-xl text-yellow-500" />
							<span>Language</span>
						</div>
						<select
							id="language"
							name="language"
							className="text-align-last-right appearance-none text-right text-yellow-500"
							defaultValue={user?.language_code ?? 'en'}
							disabled>
							<option value="en">English</option>
							<option value="de">Deutsch</option>
							<option value="kr">한글</option>
						</select>
					</div>
					<div className="flex items-center justify-between rounded-full border border-neutral-900 bg-neutral-950 px-4 py-2 shadow shadow-neutral-900">
						<div className="flex items-center gap-x-2">
							<PiBinary className="text-xl text-yellow-500" />
							<span>Version</span>
						</div>
						<span className="text-yellow-500">v0.0.1</span>
					</div>
					<div className="px-4">
						<hr className="border-neutral-900" />
					</div>
					<div className="flex items-center justify-between rounded-full border border-neutral-900 bg-neutral-950 px-4 py-2 shadow shadow-neutral-900">
						<div className="flex items-center gap-x-2">
							<PiDetective className="text-xl text-yellow-500" />
							<span>Privacy Policy</span>
						</div>
					</div>
					<div className="flex items-center justify-between rounded-full border border-neutral-900 bg-neutral-950 px-4 py-2 shadow shadow-neutral-900">
						<div className="flex items-center gap-x-2">
							<PiFileDoc className="text-xl text-yellow-500" />
							<span>Terms of Service</span>
						</div>
					</div>
				</div>
			</div>
		</PageTemplate>
	);
};

export default ProfilePage;
