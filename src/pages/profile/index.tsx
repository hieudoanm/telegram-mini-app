import { useTelegramUser } from '@telegram/contexts/TelegramUserContext';
import { PageTemplate } from '@telegram/templates/PageTemplate';
import { NextPage } from 'next';
import { PiBinary, PiCurrencyCircleDollar, PiDetective, PiFileDoc, PiTranslate } from 'react-icons/pi';

const ProfilePage: NextPage = () => {
	const { user } = useTelegramUser();

	return (
		<PageTemplate activeId="profile">
			<div className="p-8">
				<div className="flex flex-col gap-y-4">
					{user && (
						<>
							<div className="flex gap-x-4 rounded-2xl border border-neutral-800 p-4 shadow shadow-neutral-800">
								<div className="flex items-center">
									<div className="aspect-square w-24 overflow-hidden rounded-full border border-neutral-800"></div>
								</div>
								<div className="flex grow flex-col justify-center gap-y-1 truncate">
									<p className="truncate">@{user.username} - First Last</p>
									<p className="text-xl font-black">$0.00</p>
									<div>
										<button className="cursor-pointer rounded-full bg-yellow-500 px-3 py-1 text-sm font-semibold text-neutral-900">
											Deposit
										</button>
									</div>
								</div>
							</div>
							<div className="px-4">
								<hr className="border-neutral-800" />
							</div>
						</>
					)}
					<div className="flex items-center justify-between rounded-full border border-neutral-800 px-4 py-2 shadow shadow-neutral-800">
						<div className="flex items-center gap-x-2">
							<PiCurrencyCircleDollar className="text-xl text-yellow-500" />
							<span>Currency</span>
						</div>
						<select
							id="currency"
							name="currency"
							className="text-align-last-right appearance-none text-right text-yellow-500">
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
					<div className="flex items-center justify-between rounded-full border border-neutral-800 px-4 py-2 shadow shadow-neutral-800">
						<div className="flex items-center gap-x-2">
							<PiTranslate className="text-xl text-yellow-500" />
							<span>Language</span>
						</div>
						<select
							id="language"
							name="language"
							className="text-align-last-right appearance-none text-right text-yellow-500"
							value={user?.language_code ?? 'en'}
							disabled>
							<option value="en">English</option>
							<option value="de">Deutsch</option>
							<option value="kr">한글</option>
						</select>
					</div>
					<div className="flex items-center justify-between rounded-full border border-neutral-800 px-4 py-2 shadow shadow-neutral-800">
						<div className="flex items-center gap-x-2">
							<PiBinary className="text-xl text-yellow-500" />
							<span>Version</span>
						</div>
						<span className="text-yellow-500">v0.0.1</span>
					</div>
					<div className="px-4">
						<hr className="border-neutral-800" />
					</div>
					<div className="flex items-center justify-between rounded-full border border-neutral-800 px-4 py-2 shadow shadow-neutral-800">
						<div className="flex items-center gap-x-2">
							<PiDetective className="text-xl text-yellow-500" />
							<span>Privacy Policy</span>
						</div>
					</div>
					<div className="flex items-center justify-between rounded-full border border-neutral-800 px-4 py-2 shadow shadow-neutral-800">
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
