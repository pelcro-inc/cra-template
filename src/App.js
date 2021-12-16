import {
  usePelcro,
  PelcroModalController,
  Dashboard,
  DashboardOpenButton,
  SelectModal,
  LoginModal,
  RegisterModal,
  PaymentMethodUpdateModal,
  PaymentMethodSelectModal,
  SubscriptionCreateModal,
  SubscriptionRenewModal,
  NewsLetter,
  NewsletterUpdateModal,
  PaymentSuccessModal,
  MeterModal,
  UserUpdateModal,
  AddressCreateModal,
  AddressUpdateModal,
  PasswordResetModal,
  PasswordForgotModal,
  CartModal,
  ShopView,
  OrderConfirmModal,
  OrderCreateModal,
  GiftCreateModal,
  GiftRedeemModal,
  PasswordChangeModal,
  AddressSelectModal,
  ProfilePicChangeModal,
  Notification,
} from "@pelcro/react-pelcro-js";
import "@pelcro/react-pelcro-js/dist/pelcro.css";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const { switchView } = usePelcro();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit your Pelcro site config in the <code>.env</code> file
        </p>

        <button onClick={() => switchView("login")}>Login</button>
        <button onClick={() => switchView("dashboard")}>My dashboard</button>
        <button onClick={() => switchView("plan-select")}>Subscribe</button>
      </header>

      <PelcroModalController>
        <MeterModal />
        <LoginModal />
        <RegisterModal />

        <UserUpdateModal />
        <Dashboard />
        <DashboardOpenButton />
        <ProfilePicChangeModal />
        <PasswordForgotModal />
        <PasswordChangeModal />
        <PasswordResetModal />

        <PaymentMethodUpdateModal />
        <PaymentMethodSelectModal />

        <SelectModal />
        <NewsLetter />
        <NewsletterUpdateModal />

        <AddressCreateModal />
        <AddressSelectModal />
        <AddressUpdateModal />

        <SubscriptionCreateModal />
        <SubscriptionRenewModal />
        <PaymentSuccessModal />

        <GiftCreateModal />
        <GiftRedeemModal />

        <ShopView />
        <CartModal />
        <OrderCreateModal />
        <OrderConfirmModal />

        <Notification />
      </PelcroModalController>
    </div>
  );
}

export default App;
