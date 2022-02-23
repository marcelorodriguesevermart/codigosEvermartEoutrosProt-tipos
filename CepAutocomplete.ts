 /// / Cep AutoComplete////

  const buscarCep = (ev) => {
    const getCep = ev.target.value;

    fetch(`https://viacep.com.br/ws/${getCep}/json`)
      .then((res) => res.json())
      .then((data) => console.log(data));

    const response = fetch(`https://viacep.com.br/ws/${getCep}/json`);


   const { cep, bairro, localidade, logradouro } = response;

    setcomplete((prev) =>({
      ...prev,
      Cep : cep,
      Bairro : bairro,
      Cidade : localidade,
      Rua : logradouro,



    ))};
