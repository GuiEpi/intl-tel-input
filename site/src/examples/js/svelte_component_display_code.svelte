<script>
  import IntlTelInput from "intl-tel-input/svelteWithUtils";
  import "intl-tel-input/styles";

  const errorMap = [
    "Invalid number",
    "Invalid country code",
    "Too short",
    "Too long",
    "Invalid number",
  ];

  let number = $state("");
  let isValid = $state(false);
  let errorCode = $state(0);
  let noticeMode = $state("off");

  const notice = $derived.by(() => {
    if (noticeMode === "off") {
      return null;
    }
    if (isValid) {
      return noticeMode === "submit" ? `Valid number: ${number}` : "";
    }
    if (number) {
      const errorMessage = errorMap[errorCode || 0] || "Invalid number";
      return `Error: ${errorMessage}`;
    }
    return "Please enter a number";
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    noticeMode = "submit";
  };
</script>

<form onsubmit={handleSubmit}>
  <IntlTelInput
    onChangeNumber={(n) => (number = n)}
    onChangeValidity={(v) => (isValid = v)}
    onChangeErrorCode={(e) => (errorCode = e)}
    options={{
      initialCountry: "us",
      loadUtils: () => import("intl-tel-input/utils"),
    }}
    inputProps={{
      onblur: () => (noticeMode = "blur"),
    }}
  />
  <button type="submit">Validate</button>
  {#if notice}
    <div class="notice">{notice}</div>
  {/if}
</form>
