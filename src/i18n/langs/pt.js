const pt = {
  message: {
    new_connection: 'Nova Conexão',
    refresh_connection: 'Atualizar',
    edit_connection: 'Editar Conexão',
    del_connection: 'Deletar Conexão',
    duplicate_connection: 'Copiar Conexão',
    close_connection: 'Encerrar Conexão',
    add_new_line: 'Adicionar nova linha',
    dump_to_clipboard: "Copiar como comando",
    redis_version: 'Versão do Redis',
    process_id: 'ID do processo',
    used_memory: 'Memória utilizada',
    used_memory_peak: 'Pico de Memória Utilizada',
    used_memory_lua: 'Memória Utilizada Lua',
    connected_clients: 'Clientes conectados',
    total_connections_received: 'Total de Conexões',
    total_commands_processed: 'Total de Comandos',
    key_statistics: 'Principais estatísticas',
    all_redis_info: 'Todas as informações do Redis',
    server: 'Servidor',
    memory: 'Memória',
    stats: 'Estatísticas',
    settings: 'Configurações',
    ui_settings: 'Aparência',
    feature_settings: 'Função',
    common_settings: 'Geral',
    confirm_to_delete_row_data: 'Você deseja excluir os dados da linha?',
    delete_success: 'Deleção executada com sucesso',
    delete_failed: 'Houve uma falha na deleção',
    modify_success: 'Modificação executada com sucesso',
    modify_failed: 'Houve uma falha na modifição',
    add_success: 'Sucesso ao adicionar',
    add_failed: 'Falha ao adicionar',
    value_exists: 'Valor existente',
    value_not_exists: 'O valor não existe',
    refresh_success: 'Sucesso ao atualizar',
    click_enter_to_rename: 'Clique ou pressione Enter para renomear',
    click_enter_to_ttl: 'Clique ou pressione Enter para modificar TTL',
    confirm_to_delete_key: 'Você deseja deletar {key} ?',
    confirm_to_rename_key: 'Confirmar o renome {old} -> {new} ?',
    edit_line: 'Editar linha',
    auto_refresh: 'Atualização Automática',
    auto_refresh_tip: 'Interruptor de atualização automática, atualiza a cada {interval} segundos',
    key_not_exists: 'Chave não existe',
    collapse_all: 'Recolher todos',
    expand_all: 'Expandir todos',
    json_format_failed: 'Falha na análise do JSON',
    msgpack_format_failed: 'Falha na análise do Msgpack',
    php_unserialize_format_failed: 'Falha na desserialização do PHP',
    clean_up: 'Limpar',
    redis_console: 'Console do Redis',
    confirm_to_delete_connection: 'Você deseja deletar a conexão?',
    connection_exists: 'A configuração de conexão já existe',
    close_to_edit_connection: 'Você deve encerrar a conexão antes de editar',
    close_to_connection: 'Você deseja encerrar a conexão?',
    ttl_delete: 'Definir TTL <= 0 excluirá a chave diretamente',
    max_page_reached: 'Máxima página alcançada',
    add_new_key: 'Nova Chave',
    enter_new_key: 'Digite um novo nome de chave primeiro',
    key_type: 'Tipo da Chave',
    save: 'Salvar',
    enter_to_search: 'Tecle ENTER para procurar',
    export_success: 'Sucesso na Exportação',
    select_import_file: 'Selecione o arquivo',
    import_success: 'Sucesso na importação',
    put_file_here: 'Arraste o arquivo aqui ou clique para selecionar',
    config_connections: 'Conexões',
    import: 'Importar',
    export: 'Exportar',
    open: 'Abrir',
    close: 'Encerrar',
    open_new_tab: 'Abrir em uma nova aba',
    exact_search: 'Procura exata',
    enter_to_exec: 'Pressione Enter para comandos de execução, para cima e para baixo para alternar o histórico',
    pre_version: 'Versão',
    manual_update: 'Download manual',
    retry_too_many_times: 'Muitas tentativas de reconexões. Verifique o status do servidor',
    key_to_search: 'Pesquisa por palavra-chave',
    begin_update: 'Atualizar',
    ignore_this_version: 'Ignore esta versão',
    check_update: 'Checar atualização',
    update_checking: 'Procurando por atualizações existentes, aguarde um momento...',
    update_available: 'Nova versão encontrada',
    update_not_available: 'A sua aplicação está na versão mais recente',
    update_error: 'Falha na atualização',
    update_downloading: 'Downloading...',
    update_download_progress: 'Download em progresso',
    update_downloaded: 'Download da atualização concluído, reinicie seu aplicativo por favor.\
    [Tips]: Se você estiver usando o Windows, depois de fechar o aplicativo, aguarde o ícone da área de trabalho para atualizar para um estado normal (cerca de 10 segundos), e então você pode reabri-lo',
    mac_not_support_auto_update: 'Mac não suporta atualização automática, faça o <a href="https://github.com/qishibo/AnotherRedisDesktopManager/releases">download</a> e reinstale manualmente, \
    Ou execute <br><code>brew reinstall --cask another-redis-desktop-manager </code>\
    <br><hr><br>❤️se for útil para você, você pode patrocinar através da <a href="https://apps.apple.com/app/id1516451072">AppStore</a>, e a AppStore irá atualizá-lo automaticamente para você.',
    font_family: 'Font Family',
    font_faq_title: 'Instruções de configuração de fonte',
    font_faq: '1. Múltiplas fontes podem ser definidas <br>\
    2. A seleção da fonte é ordenada. É sugerido escolher a fonte em inglês primeiro e depois a fonte em seu idioma<br>\
    3. Quando a lista de fontes do sistema não pode ser carregada em alguns casos excepcionais, você pode inserir o nome da fonte instalada manualmente.',
    private_key_faq: 'A chave privada de formato RSA é compatível e começa com <pre>-----BEGIN RSA PRIVATE KEY-----</pre>\
    mas se começar com<pre>-----BEGIN OPENSSH PRIVATE KEY-----</pre>você precisa converter o formato via <pre>ssh-keygen -p -m pem -f ~/.ssh/id_rsa</pre>Esta operação não afetará o login de chave privada anterior',
    dark_mode: 'Modo noturno',
    load_more_keys: 'carregar mais',
    key_name: 'Nome da Chave',
    project_home: 'Home do Projeto',
    cluster_faq: 'Selecione qualquer nó no cluster para preencher e outros nós serão identificados automaticamente.',
    redis_status: 'Informações do Redis',
    confirm_flush_db: 'Confirme a exclusão de todas as chaves em db {db}?',
    flushdb: 'Flush DB',
    flushdb_prompt: 'Entrada "{txt}"',
    info_disabled: 'Exceção de execução do comando de informação (pode ter sido desativado), as informações do redis não podem ser exibidas',
    page_zoom: 'Zoom da página',
    scan_disabled: 'Exceção de execução do comando de scan (pode ter sido desativada), a lista de chaves não pode ser exibida',
    key_type_not_support: 'Visual display não é suportado para este tipo. Por favor, use console',
    delete_folder: 'Verificar e excluir a pasta inteira',
    multiple_select: 'Múltiplas Seleções',
    copy: 'Copiar',
    copy_success: 'Copiado com sucesso',
    keys_to_be_deleted: 'Chaves a serem apagadas',
    delete_all: 'Apagar Tudo',
    clear_cache: 'Limpar cache',
    mark_color: 'Cor da marca',
    key_no_permission: 'A permissão de leitura do arquivo expirou, selecione novamente o arquivo de chave manualmente',
    toggle_check_all: 'Selecionar tudo | Desmarcar tudo',
    select_lang: 'Selecione o idioma',
    clear_cache_tip: 'Quando há um problema com o cliente, esta operação irá deletar todas as conexões e configurações para restaurar o cliente',
    detail: 'Detalhe',
    separator_tip: 'O separador da visualização em árvore, definido como vazio para desativar a árvore e exibir as chaves como lista',
    confirm_modify_unvisible_content: 'O conteúdo contém caracteres invisíveis, você pode editar com segurança no "Hex View". Se continuar a editar em "Text View" pode causar erros de codificação, deseja continuar?',
    keys_per_loading: 'Número de chaves',
    keys_per_loading_tip: 'O número de chaves carregadas a cada vez. A configuração muito grande pode afetar o desempenho',
    host: 'Morada',
    port: 'Porta',
    username: 'Nome do usuário',
    password: 'Senha',
    connection_name: 'Nome personalizado',
    separator: 'Separador',
    timeout: 'Tempo esgotado',
    private_key: 'Chave privada',
    public_key: 'Chave pública',
    authority: 'Autorização',
    redis_node_password: 'Senha do nó Redis',
    master_group_name: 'Nome do Grupo Master',
    command_log: 'Registro',
    sentinel_faq: 'Você pode escolher uma das várias sentinelas. Preencha a configuração da sentinela para o endereço, porta e senha. A senha do nó Redis é a senha do nó mestre monitorado pela sentinela.',
    hotkey: 'Tecla de Atalho',
    persist: 'Remover o tempo de expiração',
    custom_formatter: 'Formatador Personalizado',
    editar: 'Editar',
    new: 'Adicionar',
    custom: 'Customizar',
    hide_window: 'Ocultar janela',
    minimize_window: 'Minimize a janela',
    maximize_window: 'Maximize a janela',
    load_all_keys: 'carregar tudo',
    show_load_all_keys: 'Habilite o botão para carregar todas as chaves',
    load_all_keys_tip: 'Carregue todas as chaves de uma vez. Se o número de chaves for muito grande, o cliente pode ficar preso. Por favor, use-o corretamente',
    tree_node_overflow: 'Muitas teclas ou pastas, manter apenas {num} para exibição. Se a sua chave não está aqui, é recomendada a pesquisa difusa, ou configurar o separador para espalhar as chaves em pastas',
    connection_readonly: 'Modo somente leitura. Adição, edição e exclusão são proibidas',
    memory_analysis: 'Análise de memória',
    begin: 'Começar',
    pause: 'Pausa',
    restart: 'Reiniciar',
    max_display: 'Número máximo de exibições: {num}',
    max_scan: 'Número máximo de verificações: {num}',
    close_left: 'Fechar abas esquerdas',
    close_right: 'Fechar abas direitas',
    close_other: 'Fechar outras guias',
    slow_log: 'Consulta lenta',
    load_current_folder: 'Carregar apenas a pasta atual',
    custom_css: 'Estilo personalizado',
    custom_css_placeholder: 'Por favor insira o caminho do arquivo',
    custom_name: 'Nome personalizado',
  },
};

export default pt;
